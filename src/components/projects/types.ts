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
}

export interface FeatureCategory {
    key: string;
    title: LocalizedString;
    items: LocalizedString[];
}
