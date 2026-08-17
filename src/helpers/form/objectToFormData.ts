export type FormDataValue =
    | string
    | number
    | boolean
    | Blob
    | null
    | undefined;

export function objectToFormData(
    object: Record<string, FormDataValue>
): FormData {
    const formData = new FormData();

    for (const [key, value] of Object.entries(object)) {
        if (value === null || value === undefined) {
            continue;
        }

        if (value instanceof Blob) {
            formData.append(key, value);
            continue;
        }

        formData.append(
            key,
            String(value),
        );
    }

    return formData
}
