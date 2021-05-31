import { useEffect, useState } from "react"
import { fetchAllPokemons } from "../../api";
import { PokemonResultPage } from "../../types/types"
import { PokemonCard } from "../pokemon-card";

export function PokemonMaster() {

    const [pokemonResult, setPokemonResult] = useState<PokemonResultPage>();
    const [currentOffset, setCurrentOffset] = useState<number>(0);

    useEffect(() => {
        fetchAllPokemons(currentOffset, 8)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }, [])

    const nextPokemonsList = () => {
        setCurrentOffset(currentOffset + 8)
        fetchAllPokemons(currentOffset, 8)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }

    const previousPokemonsList = () => {
        if (currentOffset > 8) {
            setCurrentOffset(currentOffset - 8)
        } else {
            setCurrentOffset(0)
        }
        fetchAllPokemons(currentOffset, 8)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="container">
                <div>Pokemon Master</div>
                <div className="row">
                    {pokemonResult?.results.map(result => (
                        <div key={result.name} className="col mt-4">
                            <PokemonCard pokemonName={result.name} />
                        </div>
                    ))}
                </div>
                <button onClick={previousPokemonsList}>Back</button>
                <button onClick={nextPokemonsList}>Next</button>
            </div>
        </>
    )

}