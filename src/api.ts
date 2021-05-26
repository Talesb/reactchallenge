import axios from 'axios';


const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// type NameUrlDTO = {
//     name: string;
//     url: string;
// }

export function fetchAllPokemons(offset: number, limit: number) {
    return axios(`${API_URL}?offset=${offset}&limit=${limit}`)
}

export function fetchPokemon(id: number) {
    return axios(`${API_URL}/${id}`)
}