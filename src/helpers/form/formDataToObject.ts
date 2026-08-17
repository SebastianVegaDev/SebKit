export function formDataToObject(
    formData: FormData
): Record<string, FormDataEntryValue> {
    const result: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of formData.entries()) {
        result[key] = value;
    }

    return result;
}
