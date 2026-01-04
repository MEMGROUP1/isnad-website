import { useMemo } from "react";

/**
 * Generate a RFC4122 v4 compliant GUID/UUID string.
 * Uses `crypto.randomUUID()` when available, otherwise falls back to a safe Math.random implementation.
 */
export function generateGuid(): string {
    if (typeof globalThis?.crypto?.randomUUID === "function") {
        try {
            return globalThis.crypto.randomUUID();
        } catch {
            // fall through to fallback
        }
    }

    // Fallback implementation (RFC4122 v4-like)
    // Note: not cryptographically strong but fine for DOM ids and non-security use-cases.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 * useRandomId
 * Returns a stable random id string for use as DOM ids or keys.
 * The id is generated once per component instance.
 *
 * @param prefix Optional prefix to make ids more readable (e.g. "btn", "avatar").
 */
export function useRandomId(prefix?: string): string {
    const id = useMemo(() => {
        return prefix ? `${prefix}-${generateGuid()}` : generateGuid();
    }, [prefix]);

    return id;
}

export default useRandomId;
