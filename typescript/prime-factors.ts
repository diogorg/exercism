export function calculatePrimeFactors(n: number): number[] {
    if (n == 1) {
        return [];
    }
    if (n < 1) {
        throw new Error('Input must be a natural number greater than 0');
    }

    const factors: number[] = [];
    let divisor = 2;

    while (n > 1) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }

        divisor++;
    }

    return factors;
}