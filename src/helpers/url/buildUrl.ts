export type QueryParamValue = string | number | boolean | null | undefined;

export type QueryParams = Record<
    string, 
    QueryParamValue | readonly QueryParamValue[]
>

export function buildUrl(
    baseUrl: string,
    params: QueryParams = {},
): string {
    const url = new URL(baseUrl);

    for (const [key, value] of Object.entries(params)) {
        if (value === null  || value === undefined) {
            continue;
        }

        if (Array.isArray(value)) {
            for (const item of value) {
                if (item === null || item === undefined) {
                    continue;
                }
                
                url.searchParams.append(key, String(item));
            }

            continue;
        }
        url.searchParams.set(key, String(value));
    }

    return url.toString();
}