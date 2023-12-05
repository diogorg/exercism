type abilities = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';


export class DnDCharacter {
    hitpoints: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    constructor() {
        this.charisma = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.strength = DnDCharacter.generateAbilityScore();
        this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10;
    }

    public static rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    public static generateAbilityScore(): number {
        const rolls = [
            DnDCharacter.rollDice(),
            DnDCharacter.rollDice(),
            DnDCharacter.rollDice(),
            DnDCharacter.rollDice()
        ];
        rolls.sort((a, b) => b - a);
        return rolls.slice(0, 3).reduce((sum, value) => sum + value, 0);
    }

    public static getModifierFor(abilityValue: number): number {
        const factor: number = Math.floor(abilityValue / 2);
        return factor - 5;
    }
}

console.log(new DnDCharacter());
