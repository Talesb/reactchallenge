import { useEffect, useState } from "react"
import { fetchAllPokemons } from "../../api";
import { PokemonResultPage } from "../../types/types"

export function PokemonMaster() {

    const [pokemonResult, setPokemonResult] = useState<PokemonResultPage>();
    const [currentOffset, setCurrentOffset] = useState<number>(0);

    useEffect(() => {
        fetchAllPokemons(currentOffset, 20)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }, [])

    const nextPokemonsList = () => {
        setCurrentOffset(currentOffset + 20)
        fetchAllPokemons(currentOffset, 20)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }

    const previousPokemonsList = () => {
        if (currentOffset > 20) {
            setCurrentOffset(currentOffset - 20)
        } else {
            setCurrentOffset(0)
        }
        fetchAllPokemons(currentOffset, 20)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <div>Pokemon Master</div>
            {pokemonResult?.results.map(result => (
                <div key={result.name}>
                    <span><strong>{result.name}</strong></span>
                </div>
            ))}

            <button onClick={previousPokemonsList}>Back</button>
            <button onClick={nextPokemonsList}>Next</button>

        </>
    )

}