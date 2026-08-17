export function removeQueryParm(
    url: string,
    key: string,
): string {
    const parsedUrl = new URL(url);

    parsedUrl.searchParams.delete(key);

    return parsedUrl.toString();
}