export function decodedValue(colors: string[]): number {
    const colorMap: { [key: string]: number } = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9,
    };

    const colorArray = colors.slice(0, 2);

    return parseInt(colorArray.map(color => colorMap[color]).join(''), 10);
}
