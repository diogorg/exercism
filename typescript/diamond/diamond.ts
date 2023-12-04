export function makeDiamond(letter: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (!alphabet.includes(letter)) {
        throw new Error('Input must be a letter from A to Z');
    }

    const diamond: string[] = [];
    const index = alphabet.indexOf(letter.toUpperCase());

    for (let i = 0; i <= index; i++) {
        const spaces = ' '.repeat(index - i);
        const repeat = 2 * i - 1 >= 0 ? 2 * i - 1 : 0;
        const row = spaces + alphabet[i] + ' '.repeat(repeat) + (i > 0 ? alphabet[i] : '') + spaces;
        diamond.push(row);
    }

    for (let i = index - 1; i >= 0; i--) {
        const spaces = ' '.repeat(index - i);
        const repeat = 2 * i - 1 >= 0 ? 2 * i - 1 : 0;
        const row = spaces + alphabet[i] + ' '.repeat(repeat) + (i > 0 ? alphabet[i] : '') + spaces;
        diamond.push(row);
    }

    return diamond.join('\n');
}
