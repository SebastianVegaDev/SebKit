export async function sequential<T>(
    tasks: Iterable<() => Promise<T>>
): Promise<T[]> {
    const results: T[] = [];
    
    for (const task of tasks) {
        const result = await task();
        results.push(result);
    }

    return results;
}