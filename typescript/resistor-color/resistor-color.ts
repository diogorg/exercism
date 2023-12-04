export const colorCode = (color: string): number | undefined => {
    const index = COLORS.indexOf(color);
    return index !== -1 ? index : undefined;
}

export const COLORS: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'green', 'blue', 'violet', 'grey', 'white'
];