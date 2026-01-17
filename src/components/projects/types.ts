export interface LocalizedString {
    ar: string;
    en: string;
}

export type Location = string;

export interface Governorate {
    id: string | number;
    name: LocalizedString;
}

export interface ComplexFile {
    id: string | number;
    path: string;
    type: string;
}

export interface Complex {
    id: string;
    name: LocalizedString;
    description: LocalizedString;
    background_img: string;
    logo: string;
    governorate: Governorate;
    location: Location;
    files: ComplexFile[];
    features?: FeatureCategory[];
    installment?: {
        min_down_payment?: number;
        max_years?: number;
    };
    starting_price?: number;
    max_price?: number;
    developer?: {
        name: LocalizedString;
        logo: string;
        complexes_count: number;
        properties_count: number;
    };
    // Added fields from API
    total_units?: number;
    unit_type?: LocalizedString;
    delivery_year?: number;
    built_status?: LocalizedString;
    is_exclusive?: LocalizedString;
}

export interface FeatureCategory {
    key: string;
    title: LocalizedString;
    items: LocalizedString[];
}
