import { Complex, FeatureCategory } from "@/components/projects/types";
import { CityDto, ComplexDto, AdvantageReadDto, LocalizedText } from "@/services/types/website.types";

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
            id: city.governorate?.id ? parseInt(city.governorate.id) : 0, 
            name: { ar: city.governorate?.name?.ar || "", en: city.governorate?.name?.en || "" },
        },
        location: city.location || "",
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
                  id: city.developer.id,
                  name: mapLocalized(city.developer.name),
                  logo: city.developer.logo || "",
                  total_cities: city.developer.totalCities || 0,
                  total_complexes: city.developer.totalComplexes || 0,
                  complexes_count: 0, // Deprecated
                  properties_count: 0, // Deprecated
              }
            : undefined,
        // New fields
        total_units: city.totalUnits,
        unit_type: mapLocalized(city.unitType),
        delivery_year: city.deliveryYear,
        built_status: mapLocalized(city.builtStatus),
        is_exclusive: mapLocalized(city.isExclusive),
    };
}

// Assessing ComplexDto is similar
export function mapComplexToComplex(complex: ComplexDto): Complex {
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
        location: complex.location || "",
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
                  id: complex.developer.id,
                  name: mapLocalized(complex.developer.name),
                  logo: complex.developer.logo || "",
                  total_cities: complex.developer.totalCities || 0,
                  total_complexes: complex.developer.totalComplexes || 0,
                  complexes_count: 0, // Deprecated
                  properties_count: 0, // Deprecated
              }
            : undefined,
        // New fields
        total_units: complex.totalUnits,
        unit_type: mapLocalized(complex.unitType),
        delivery_year: complex.deliveryYear,
        built_status: mapLocalized(complex.builtStatus),
        is_exclusive: mapLocalized(complex.isExclusive),
    };
}
