export async function parallel<T>(
    tasks:  Iterable<() => Promise<T>>
): Promise<T[]> {
    const promises: Promise<T>[] = [];

    for (const task of tasks) {
        promises.push(task());
    }

    return Promise.all(promises);
}