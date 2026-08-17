export type QueryParamValue =
    string |
    number |
    boolean;

export function setQueryParam(
    url: string,
    key: string,
    value: QueryParamValue,
): string {
    const parsedUrl = new URL(url);

    parsedUrl.searchParams.set(
        key,
        String(value),
    );

    return parsedUrl.toString();
}