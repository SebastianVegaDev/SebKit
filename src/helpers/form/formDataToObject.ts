export function formDataToObject(
    farmData: FormData
): Record<string, FormDataEntryValue> {
    const result: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of farmData.entries()) {
        result[key] = value;
    }

    return result;
}