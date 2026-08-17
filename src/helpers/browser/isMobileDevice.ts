const MOBILE_USER_AGENT_PATTERN =
    /Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini|Mobile|webOS/i;

export function isMobileDevice(
    userAgent?: string
): boolean {
    const value = 
        userAgent ??
        (typeof navigator !== "undefined"
            ? navigator.userAgent
            : "");

    return MOBILE_USER_AGENT_PATTERN.test(value);
}