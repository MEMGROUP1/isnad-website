export interface LocalizedText {
    ar?: string;
    en?: string;
}

export interface EmbeddedDeveloperDto {
    id: string;
    name?: LocalizedText;
    totalCities?: number;
    totalComplexes?: number;
    logo?: string | null;
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
    developer?: EmbeddedDeveloperDto;
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
export interface CompanyLink {
    id: string;
    url: string;
    type: string;
}

export interface CompanyBranch {
    id: string;
    governorate: {
        id: string;
        name: LocalizedText;
    };
    location: string;
    address: LocalizedText;
}

export interface CompanyDiscount {
    id: string;
    percentage: number;
    description: LocalizedText;
    maxUses: number;
    isnadPercentage: number;
}

export interface CompanyDto {
    id: string;
    name: LocalizedText;
    logo?: string | null;
    description?: LocalizedText;
    backgroundImageUrl?: string | null;
    isVisible: boolean;
    phone?: string | null;
    discount?: string | null;
    isnadPercentage?: number | null;
    contractSigningDate?: string | null;
    contractExpirationDate?: string | null;
    createdAt: string;
    updatedAt: string;
    links: CompanyLink[];
    branches: CompanyBranch[];
    discounts: CompanyDiscount[];
    types: LocalizedText[];
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
    developer?: EmbeddedDeveloperDto;
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
    description?: LocalizedText;
    logo?: string | null;
    backgroundImageUrl?: string | null;
    totalComplexes?: number;
    totalCities?: number;
    [key: string]: unknown;
}

export interface GeneralStatisticsDto {
    totalCities: number;
    totalComplexes: number;
    totalCompanies: number;
    totalDevelopers: number;
    totalProjects: number;
    totalCustomers: number;
    revenues: number;
    developerLogos: string[];
    developerBackgrounds: string[];
    cityLogos: string[];
    complexLogos: string[];
    projectLogos: string[];
    companyLogos: string[];
}
