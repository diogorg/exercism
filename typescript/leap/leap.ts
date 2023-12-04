export function isLeap(year: number): boolean {
    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;

    if (divisibleBy4) {
        if (divisibleBy100) {
            return divisibleBy400;
        } else {
            return true;
        }
    }

    return false;
}