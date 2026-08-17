import { isClient } from "./isClient.js";
import { isNode } from "./isNode.js";

export  type Runtime =
    | "browser"
    | "node"
    | "unknown";

export function getRuntime(): Runtime {
    if (isClient()) {
        return "browser";
    }

    if (isNode()) {
        return "node"
    }

    return "unknown";
}