export interface LocalizedText {
    ar?: string | null;
    en?: string | null;
}

export interface CityDto {
    id: string;
    name?: LocalizedText;
    description?: LocalizedText;
    governorate?: {
        id: string;
        name?: { [key: string]: string };
    };
    paymentIntroduction?: number;
    years?: string | null;
    isExclusive?: LocalizedText;
    sortOrder?: number;
    type?: LocalizedText;
    totalUnits?: number;
    backgroundImg?: string | null;
    maxPrice?: number;
    minPrice?: number;
    location?: string | null;
    builtStatus?: LocalizedText;
    isVisible?: LocalizedText;
    logo?: string | null;
    addedBy?: string | null;
    developer?: {
        id: string;
        name?: { [key: string]: string };
    };
    unitType?: LocalizedText;
    deliveryYear?: number;
    media?: CityMediaDto[] | null;
    advantages?: AdvantageReadDto[] | null;
}

export interface CityMediaDto {
    id: string;
    url?: string | null;
    type?: "Image" | "Video";
}

export interface AdvantageReadDto {
    id: string;
    name?: { [key: string]: string } | null;
    type?: { [key: string]: string } | null;
}

// Placeholder types for missing schemas in Swagger
export interface CompanyDto {
    id: string;
    name?: LocalizedText;
    [key: string]: unknown;
}

export interface ComplexDto {
    id: string;
    name?: LocalizedText;
    description?: LocalizedText;
    governorate?: {
        id: string;
        name?: { [key: string]: string };
    };
    paymentIntroduction?: number;
    years?: string | null;
    backgroundImg?: string | null;
    maxPrice?: number;
    minPrice?: number;
    location?: string | null;
    logo?: string | null;
    developer?: {
        id: string;
        name?: { [key: string]: string };
    };
    media?: CityMediaDto[] | null;
    advantages?: AdvantageReadDto[] | null;
    totalUnits?: number;
    unitType?: LocalizedText;
    deliveryYear?: number;
    builtStatus?: LocalizedText;
    isExclusive?: LocalizedText;
}

export interface DeveloperDto {
    id: string;
    name?: LocalizedText;
    [key: string]: unknown;
}
