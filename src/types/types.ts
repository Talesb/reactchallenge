
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