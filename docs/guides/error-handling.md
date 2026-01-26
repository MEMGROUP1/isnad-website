# API Error Handling Guide

**Last Updated:** January 26, 2026

## Overview

This guide explains how API errors are handled throughout the Isnad website application. The error handling strategy is multi-layered to ensure graceful degradation and proper user feedback.

## Error Handling Layers

### 1. **Service Layer** (`src/services/website.service.ts`)

All API calls are wrapped in try-catch blocks with a centralized error handler:

#### What it does:
- **Catches Axios errors** at the source
- **Logs detailed error information** for debugging (endpoint, error code, status)
- **Returns safe defaults** for list endpoints to prevent page crashes
- **Throws errors** for detail endpoints so parent components can handle them

#### Behavior by endpoint type:

**List endpoints** (e.g., `getCities`, `getCompanies`):
```typescript
getCities: async (params?: {...}): Promise<CityDto[]> => {
    try {
        const { data } = await api.get("/WebsiteCities", { params });
        return data;
    } catch (error) {
        handleApiError(error, "/WebsiteCities");
        return []; // ← Returns empty array instead of crashing
    }
}
```

**Detail endpoints** (e.g., `getCityById`, `getCompanyById`):
```typescript
getCityById: async (id: string): Promise<CityDto> => {
    try {
        const { data } = await api.get(`/WebsiteCities/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, `/WebsiteCities/${id}`);
        throw new Error(`Failed to fetch city with ID: ${id}`); // ← Throws for handling
    }
}
```

This strategy ensures:
- **Page-level endpoints** like home page don't crash on API failures
- **Detail pages** can be redirected or show proper error states

### 2. **API Client Layer** (`src/hooks/useApiClient.ts`)

The Axios instance has a global response interceptor that:

**Intercepts all errors and logs them:**
```typescript
api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        if (error.response?.status === 502) {
            console.error("Server Error (502):", {...});
        } else if (error.response?.status === 503) {
            console.error("Service Unavailable (503):", {...});
        } else if (error.response) {
            console.error(`API Error ${error.response.status}:`, {...});
        } else if (error.request) {
            console.error("No response from server:", {...});
        }
        return Promise.reject(error);
    }
);
```

This provides:
- **Consistent logging** across all API calls
- **Status-specific handling** (502, 503, etc.)
- **Network error detection** (when request is made but no response)

### 3. **Component Level** (`src/app/[locale]/error.tsx`)

Next.js Error Boundary component catches unhandled errors:

```tsx
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Section className="flex min-h-[50vh] items-center justify-center">
            <ErrorMessage
                title="Something went wrong!"
                message={error.message || "An unexpected error occurred."}
                onRetry={reset}
            />
        </Section>
    );
}
```

This displays a user-friendly error message with a retry button.

## Error Recovery Strategies

### 1. **Graceful Degradation** (Preferred for lists)
- **Empty state**: Show "No items available" instead of crashing
- **Example**: If cities API fails, show empty cities list rather than breaking the page

### 2. **Error Propagation** (For critical detail pages)
- **Throw error**: Let parent component handle and redirect
- **Example**: If `/companies/{id}` fails, show 404 or error page

### 3. **User Notification** (Global fallback)
- **Error boundary**: Catch unhandled errors and show user-friendly message
- **Retry button**: Allow users to retry failed operations

## Common Error Codes

| Status | Name | Cause | Handling |
|--------|------|-------|----------|
| 502 | Bad Gateway | Server restart, upstream issue | Logged, defaults returned |
| 503 | Service Unavailable | Server maintenance | Logged, defaults returned |
| 404 | Not Found | Resource doesn't exist | Thrown to component |
| 400 | Bad Request | Invalid parameters | Logged, empty array |
| 500 | Internal Server Error | Server bug | Logged, defaults returned |

## How to Handle Errors in New Components

### For page-level data fetches:

```typescript
const data = await websiteService.getCities(); // Returns [] on error
// Always safe - no try-catch needed
```

### For detail page data:

```tsx
export default async function CityDetail({ params: { id } }) {
    try {
        const city = await websiteService.getCityById(id);
        return <CityView city={city} />;
    } catch (error) {
        // Redirect to 404 or show error
        notFound();
    }
}
```

## Testing Error Scenarios

To test 502 errors:
1. Stop the backend API server
2. Reload the page
3. Check browser console for error logs
4. Verify fallback UI is displayed (empty lists, error boundary)

## Monitoring & Debugging

All errors are logged to the browser console with:
- **Endpoint**: Which API endpoint failed
- **Status code**: HTTP status if available
- **Error message**: Detailed error description
- **Request method & URL**: Full request details

Example console output:
```
Failed to fetch from /Statistic/general: {
    message: "Request failed with status code 502",
    code: "ERR_BAD_RESPONSE",
    status: 502
}
```

## Future Improvements

1. **Error reporting service**: Send errors to a monitoring platform (Sentry, etc.)
2. **Retry logic**: Implement exponential backoff for transient failures
3. **Toast notifications**: Show user-friendly messages for different error types
4. **Cache fallback**: Use cached data when API fails
5. **Offline support**: Detect network status and show appropriate UI
