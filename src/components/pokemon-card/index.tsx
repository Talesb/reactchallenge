import { useEffect, useState } from "react";
import { fetchPokemon } from "../../api";
import { Pokemon } from "../../types/types";

type Props = {
    pokemonName: string
}


export function PokemonCard({ pokemonName }: Props) {
    const [pokemon, setPokemon] = useState<Pokemon>();


    useEffect(() => {
        fetchPokemon(pokemonName)
            .then(response => setPokemon(response.data))
            .catch(error => console.log(error))
    }, [])




    return (
        <>
            <div className="card pokemon" style={{ width: '18rem' }}>
                <img src={pokemon?.sprites.front_default} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title"> {pokemonName}</h5>
                    <ul className="list-group list-group-flush">

                        {pokemon?.types.map(type => (
                            <div key={type.type.name} className="col mt-4">
                                <li className="list-group-item">{type.type.name}</li>
                            </div>
                        ))}
                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )

}