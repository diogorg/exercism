type Planets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export function age(planet: Planets, seconds: number): number {
    const orbitalPeriods: Record<Planets, number> = {
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'earth': 1.0,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132,
    };
    const yearSeconds: number = 31557600;
    const orbitalPeriod = orbitalPeriods[planet];
    const ageOnPlanet: number = seconds / (orbitalPeriod * yearSeconds);

    return parseFloat(ageOnPlanet.toFixed(2));
}