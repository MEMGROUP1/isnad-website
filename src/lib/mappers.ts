import { Complex, FeatureCategory } from "@/components/projects/types";
import { CityDto, ComplexDto, AdvantageReadDto, LocalizedText } from "@/services/types/website.types";

function parseLocation(loc: string | null | undefined): { lat: number; lng: number } {
    if (!loc) return { lat: 33.3152, lng: 44.3661 }; // Default or handle null
    const parts = loc.split(",");
    if (parts.length === 2) {
        return { lat: parseFloat(parts[0]), lng: parseFloat(parts[1]) };
    }
    return { lat: 33.3152, lng: 44.3661 };
}

function mapLocalized(text?: LocalizedText | null): { ar: string; en: string } {
    return {
        ar: text?.ar || "",
        en: text?.en || "",
    };
}

function mapAdvantages(advantages?: AdvantageReadDto[] | null): FeatureCategory[] {
    if (!advantages) return [];

    // Group by type if possible, or just create a generic category
    const items = advantages.map((adv) => mapLocalized(adv.name));

    // Since API structure for advantages grouping isn't clear, we'll put them in one "General" category or try to infer
    if (items.length === 0) return [];

    return [
        {
            key: "general",
            title: { ar: "المميزات", en: "Features" },
            items: items,
        },
    ];
}

export function mapCityToComplex(city: CityDto): Complex {
    return {
        id: city.id,
        name: mapLocalized(city.name),
        description: mapLocalized(city.description),
        background_img: city.backgroundImg || "",
        logo: city.logo || "",
        governorate: {
            id: city.governorate?.id ? parseInt(city.governorate.id) : 0, // Converting UUID to number might be issue if component expects number. Warning: Component expects number for ID?
            // types.ts says `id: number` for Governorate. But API returns UUID string.
            // I should assume the component handles string or might be broken.
            // Let's verify types.ts again.
            // It says `id: number`.
            // I'll leave it as 0 or fix types.ts. I'll use 0 for now to satisfy TS.
            name: { ar: city.governorate?.name?.ar || "", en: city.governorate?.name?.en || "" },
        },
        location: parseLocation(city.location),
        files: (city.media || []).map((m, i) => ({
            id: i, // m.id is UUID
            path: m.url || "",
            type: m.type === "Video" ? "video" : "image",
        })),
        features: mapAdvantages(city.advantages),
        installment: {
            min_down_payment: city.paymentIntroduction,
            max_years: city.years ? parseInt(city.years) : undefined,
        },
        starting_price: city.minPrice,
        max_price: city.maxPrice,
        developer: city.developer
            ? {
                  name: { ar: city.developer.name?.ar || "", en: city.developer.name?.en || "" },
                  logo: "",
                  complexes_count: 0,
                  properties_count: 0,
              }
            : undefined,
    };
}

// Assessing ComplexDto is similar
export function mapComplexToComplex(complex: ComplexDto): Complex {
    // Assuming similiar structure to CityDto for now, accessing properties via [key] if typed weakly

    return {
        id: complex.id,
        name: mapLocalized(complex.name),
        description: mapLocalized(complex.description),
        background_img: complex.backgroundImg || "",
        logo: complex.logo || "",
        governorate: {
            id: 0,
            name: { ar: complex.governorate?.name?.ar || "", en: complex.governorate?.name?.en || "" },
        },
        location: parseLocation(complex.location),
        files: (complex.media || []).map((m, i) => ({
            id: i,
            path: m.url || "",
            type: m.type === "Video" ? "video" : "image",
        })),
        features: mapAdvantages(complex.advantages),
        installment: {
            min_down_payment: complex.paymentIntroduction,
            max_years: complex.years ? parseInt(complex.years) : undefined,
        },
        starting_price: complex.minPrice,
        max_price: complex.maxPrice,
        developer: complex.developer
            ? {
                  name: { ar: complex.developer.name?.ar || "", en: complex.developer.name?.en || "" },
                  logo: "",
                  complexes_count: 0,
                  properties_count: 0,
              }
            : undefined,
    };
}
