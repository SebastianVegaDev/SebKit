export function getQueryParam(
    url: string,
    key: string,
): string | null {
    const parsedUrl = new URL(url);

    return parsedUrl.searchParams.get(key);
}   