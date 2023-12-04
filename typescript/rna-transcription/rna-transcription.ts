export function toRna(dnaSequence: string): string {
    const complementMap: Record<string, string> = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };

    return dnaSequence
        .split('')
        .map((nucleotide) => {
            if (complementMap[nucleotide] === undefined) {
                throw new Error('Invalid input DNA.');
            }
            return complementMap[nucleotide]
        })
        .join('');
}