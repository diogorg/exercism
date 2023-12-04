type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';
type Units = 'ohms' | 'kiloohms' | 'megaohms' | 'gigaohms';

const applyUnit = (finalValue: number) => {
    const unitValues: Record<Units, number> = {
        'gigaohms': 1000 * 1000 * 1000,
        'megaohms': 1000 * 1000,
        'kiloohms': 1000,
        'ohms': 1,
    }

    for (const [unit, value] of Object.entries(unitValues)) {
        if (finalValue >= value) {
            return `${finalValue / value} ${unit}`;
        }
    }

    return `${finalValue} ohms`;
};

export function decodedResistorValue(colors: Color[]): string {
    const [color1, color2, color3] = colors;
    const colorValues: Record<Color, number> = {
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

    const mainValue = colorValues[color1] * 10 + colorValues[color2];
    const finalValue = mainValue * (10 ** colorValues[color3]);

    return applyUnit(finalValue);
}