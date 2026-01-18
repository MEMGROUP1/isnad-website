import { api } from "@/hooks/useApiClient";
import { CityDto, CompanyDto, ComplexDto, DeveloperDto, GeneralStatisticsDto } from "./types/website.types";

export const websiteService = {
    getGeneralStatistics: async (): Promise<GeneralStatisticsDto> => {
        const { data } = await api.get("/Statistic/general");
        return data;
    },
    getCities: async (params?: { developerId?: string /* optional uuid of developer */ }): Promise<CityDto[]> => {
        const { data } = await api.get("/WebsiteCities", {
            params,
        });
        return data;
    },
    getCityById: async (id: string): Promise<CityDto> => {
        const { data } = await api.get(`/WebsiteCities/${id}`);
        return data;
    },
    getCompanies: async (type?: string): Promise<CompanyDto[]> => {
        const { data } = await api.get("/WebsiteCompany/companies", {
            params: { type },
        });
        return data;
    },
    getCompanyById: async (id: string): Promise<CompanyDto> => {
        const { data } = await api.get(`/WebsiteCompany/companies/${id}`);
        return data;
    },
    getComplexes: async (params?: { developerId?: string /* optional uuid of developer */ }): Promise<ComplexDto[]> => {
        const { data } = await api.get("/WebsiteComplex", {
            params,
        });
        return data;
    },
    getComplexById: async (id: string): Promise<ComplexDto> => {
        const { data } = await api.get(`/WebsiteComplex/${id}`);
        return data;
    },
    getDevelopers: async (): Promise<DeveloperDto[]> => {
        const { data } = await api.get("/WebsiteDevelopers");
        return data;
    },
    getDeveloperById: async (id: string): Promise<DeveloperDto> => {
        const { data } = await api.get(`/WebsiteDevelopers/${id}`);
        return data;
    },
};
