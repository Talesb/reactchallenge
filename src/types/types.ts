
export type PokemonResult = {
    name: string;
    url: string
}

export type PokemonResultPage = {
    count: number;
    next: string;
    previous: string;
    results: PokemonResult[]
}

export type Pokemon = {
    abilities: PokemonAbility[];
    types: PokemonType[];
    height: number;
    weight: number;
    sprites: PokemonSprite;
}

export type PokemonType = {
    slot: number;
    type: NameUrlDecorator
}

export type PokemonAbility = {
    ability: NameUrlDecorator,
    is_hidden: boolean,
    slot: number
}

export type NameUrlDecorator = {
    name: string;
    url: string;
}

export type PokemonSprite = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}