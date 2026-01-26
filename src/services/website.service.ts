import { api } from "@/hooks/useApiClient";
import { CityDto, CompanyDto, ComplexDto, DeveloperDto, GeneralStatisticsDto } from "./types/website.types";

/**
 * Handles API errors and logs them for debugging
 */
const handleApiError = (error: unknown, endpoint: string) => {
    if (error instanceof Error) {
        console.error(`Failed to fetch from ${endpoint}:`, {
            message: error.message,
            ...(error instanceof Error && 'code' in error && { code: (error as any).code }),
            ...(error instanceof Error && 'status' in error && { status: (error as any).status }),
        });
    } else {
        console.error(`Failed to fetch from ${endpoint}:`, error);
    }
};

export const websiteService = {
    /**
     * Fetches general statistics for the website
     * Returns default empty statistics on error to prevent page crashes
     */
    getGeneralStatistics: async (): Promise<GeneralStatisticsDto> => {
        try {
            const { data } = await api.get("/Statistic/general");
            return data;
        } catch (error) {
            handleApiError(error, "/Statistic/general");
            // Return default statistics to prevent page crash
            return {
                totalCities: 0,
                totalComplexes: 0,
                totalCompanies: 0,
                totalDevelopers: 0,
                totalProjects: 0,
                totalCustomers: 0,
                revenues: 0,
                developerLogos: [],
                developerBackgrounds: [],
                cityLogos: [],
                complexLogos: [],
                projectLogos: [],
                companyLogos: [],
            };
        }
    },
    getCities: async (params?: { developerId?: string /* optional uuid of developer */ }): Promise<CityDto[]> => {
        try {
            const { data } = await api.get("/WebsiteCities", {
                params,
            });
            return data;
        } catch (error) {
            handleApiError(error, "/WebsiteCities");
            return [];
        }
    },
    getCityById: async (id: string): Promise<CityDto> => {
        try {
            const { data } = await api.get(`/WebsiteCities/${id}`);
            return data;
        } catch (error) {
            handleApiError(error, `/WebsiteCities/${id}`);
            throw new Error(`Failed to fetch city with ID: ${id}`);
        }
    },
    getCompanies: async (type?: string): Promise<CompanyDto[]> => {
        try {
            const { data } = await api.get("/WebsiteCompany/companies", {
                params: { type },
            });
            return data;
        } catch (error) {
            handleApiError(error, "/WebsiteCompany/companies");
            return [];
        }
    },
    getCompanyById: async (id: string): Promise<CompanyDto> => {
        try {
            const { data } = await api.get(`/WebsiteCompany/companies/${id}`);
            return data;
        } catch (error) {
            handleApiError(error, `/WebsiteCompany/companies/${id}`);
            throw new Error(`Failed to fetch company with ID: ${id}`);
        }
    },
    getComplexes: async (params?: { developerId?: string /* optional uuid of developer */ }): Promise<ComplexDto[]> => {
        try {
            const { data } = await api.get("/WebsiteComplex", {
                params,
            });
            return data;
        } catch (error) {
            handleApiError(error, "/WebsiteComplex");
            return [];
        }
    },
    getComplexById: async (id: string): Promise<ComplexDto> => {
        try {
            const { data } = await api.get(`/WebsiteComplex/${id}`);
            return data;
        } catch (error) {
            handleApiError(error, `/WebsiteComplex/${id}`);
            throw new Error(`Failed to fetch complex with ID: ${id}`);
        }
    },
    getDevelopers: async (): Promise<DeveloperDto[]> => {
        try {
            const { data } = await api.get("/WebsiteDevelopers");
            return data;
        } catch (error) {
            handleApiError(error, "/WebsiteDevelopers");
            return [];
        }
    },
    getDeveloperById: async (id: string): Promise<DeveloperDto> => {
        try {
            const { data } = await api.get(`/WebsiteDevelopers/${id}`);
            return data;
        } catch (error) {
            handleApiError(error, `/WebsiteDevelopers/${id}`);
            throw new Error(`Failed to fetch developer with ID: ${id}`);
        }
    },
};
