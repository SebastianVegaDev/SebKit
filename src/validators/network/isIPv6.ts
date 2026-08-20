const IPV6_GROUP_COUNT = 8;
const IPV6_COMPRESSION = "::";
const IPV6_HEX_GROUP_REGEX = /^[0-9A-Fa-f]{1,4}$/;

function isValidHexGroup(group: string): boolean {
    return IPV6_HEX_GROUP_REGEX.test(group);
}

function splitIPv6Side(side: string): string[] {
    return side === ""
        ? []
        : side.split(":");
}

function hasMultipleCompressions(value: string): boolean {
    return value.indexOf(IPV6_COMPRESSION) !==
        value.lastIndexOf(IPV6_COMPRESSION);
}

export function isIPv6(
    value: unknown
): value is string {
    if (typeof value !== "string" || value.length === 0) {
        return false;
    }

    const hasCompression = value.includes(IPV6_COMPRESSION);

    if (hasCompression && hasMultipleCompressions(value)) {
        return false;
    }

    if (!hasCompression) {
        const groups = value.split(":");

        return groups.length === IPV6_GROUP_COUNT &&
            groups.every(isValidHexGroup);
    }

    const [left = "", right = ""] = value.split(IPV6_COMPRESSION);

    const groups = [
        ...splitIPv6Side(left),
        ...splitIPv6Side(right),
    ];

    return groups.length < IPV6_GROUP_COUNT &&
        groups.every(isValidHexGroup);
}
