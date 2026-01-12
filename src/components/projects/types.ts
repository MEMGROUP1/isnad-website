export interface LocalizedString {
    ar: string;
    en: string;
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Governorate {
    id: number;
    name: LocalizedString;
}

export interface ComplexFile {
    id: number;
    path: string;
    type: string;
}

export interface Complex {
    id: string;
    name: LocalizedString;
    description: LocalizedString;
    background_img: string; // URL
    logo: string; // URL
    governorate: Governorate;
    location: Location;
    files: ComplexFile[];
    features?: FeatureCategory[];
    installment?: {
        min_down_payment?: number;
        max_years?: number;
    };
    starting_price?: number; // In IQD usually
    max_price?: number; // In IQD usually
    developer?: {
        name: LocalizedString;
        logo: string;
        complexes_count: number;
        properties_count: number;
    };
}

export interface FeatureCategory {
    key: string;
    title: LocalizedString;
    items: LocalizedString[];
}
