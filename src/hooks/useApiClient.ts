import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://isnad.runasp.net",
    headers: { "Content-Type": "application/json" },
});

/**
 * Add response interceptor to handle global API errors
 */
api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        // Log error details for debugging
        if (error.response?.status === 502) {
            console.error("Server Error (502):", {
                url: error.config?.url,
                method: error.config?.method,
                message: "The server encountered an unexpected condition",
            });
        } else if (error.response?.status === 503) {
            console.error("Service Unavailable (503):", {
                url: error.config?.url,
                message: "The server is temporarily unavailable",
            });
        } else if (error.response) {
            console.error(`API Error ${error.response.status}:`, {
                url: error.config?.url,
                data: error.response.data,
            });
        } else if (error.request) {
            console.error("No response from server:", {
                url: error.config?.url,
                message: error.message,
            });
        }
        
        return Promise.reject(error);
    }
);
