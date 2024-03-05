export function createDeckSizesArray(start = 3, end = 10): number[] {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
        result.push(i*2);
    }

    return result;
}