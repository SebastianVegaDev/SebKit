export function getFormValue(
    formData: FormData,
    key: string,
): string | null {
    const value = formData.get(key);

    if (typeof value !== "string") {
        return null;
    }

    return value;
}