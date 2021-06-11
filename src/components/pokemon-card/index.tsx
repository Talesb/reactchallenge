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
                <div className="card-body text-center">
                    <h5 className="card-title text-center "><p className="text-capitalize">  {pokemonName}</p></h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                            {pokemon?.types.map(type => (
                                <div key={type.type.name} className="col mt-4 " style={{ display: "inline-block" }}>
                                    <img alt={type.type.name} style={{ width: "70%" }} src={`../../assets/${type.type.name}.png`} />
                                </div>
                            ))}
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
                </div>
            </div>
        </>
    )

}