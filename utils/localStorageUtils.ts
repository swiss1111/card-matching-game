export function checkAndSetBestTry(size: number, step: number): void {
    const bestTry = getBestTry(size);
    if(!bestTry || bestTry > step) {
        setBestTry(size, step);
    }
}

export function getBestTry(size: number): number | undefined {
    try {
        return JSON.parse(window.localStorage.getItem(`best-try-${size}`) || "");
    } catch (e) {
        console.warn("Can't load best try from localStorage.")
    }
    return undefined;
}

export function setBestTry(size: number, step: number) {
    window.localStorage.setItem(`best-try-${size}`, String(step));
}