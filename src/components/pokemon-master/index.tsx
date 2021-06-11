import { useEffect, useState } from "react"
import { fetchAllPokemons } from "../../api";
import { PokemonResultPage } from "../../types/types"
import { PokemonCard } from "../pokemon-card";

export function PokemonMaster() {

    const [pokemonResult, setPokemonResult] = useState<PokemonResultPage>();
    const [currentOffset, setCurrentOffset] = useState<number>(0);
    const [currentStartIndex, setCurrentStartIndex] = useState<number>(0);
    const [selectedPage, setSelectedPage] = useState<number>(1);

    useEffect(() => {
        fetchAllPokemons(currentOffset, 8)
            .then(response => {
                setPokemonResult(response.data);
                // setCurrentOffset(currentOffset + 8)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log(currentOffset);
        fetchAllPokemons(currentOffset, 8)
            .then(response => setPokemonResult(response.data))
            .catch(error => console.log(error))
    }, [currentOffset])

    const nextPokemonsList = () => {
        console.log(selectedPage);
        if (selectedPage % 3 > 0) {
            setSelectedPage(selectedPage + 1);
        } else {
            setCurrentStartIndex(currentStartIndex + 3);
            setSelectedPage(selectedPage + 1);
        }
        console.log(currentStartIndex);
        setCurrentOffset(8 * selectedPage)

    }

    const previousPokemonsList = () => {
        if (selectedPage > 1) {
            if ((selectedPage - 1) % 3 > 0) {
                setSelectedPage(selectedPage - 1);
            } else {
                setCurrentStartIndex(currentStartIndex - 3);
                setSelectedPage(selectedPage - 3);
            }

            if (currentOffset > 8) {
                setCurrentOffset(currentOffset - 8)
            } else {
                setCurrentOffset(0)
            }
            fetchAllPokemons(currentOffset, 8)
                .then(response => setPokemonResult(response.data))
                .catch(error => console.log(error))
        }
    }


    const changePage = (pagevalue: number) => {
        setCurrentOffset(8 * pagevalue);
        setSelectedPage(pagevalue + 1);
        console.log(selectedPage);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {pokemonResult?.results.map(result => (
                        <div key={result.name} className="col mt-4">
                            <PokemonCard pokemonName={result.name} />
                        </div>
                    ))}
                </div>
                <div className="row  mt-4">
                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }} >
                        <nav aria-label="...">
                            <ul className="pagination mx-auto">
                                <li className={'page-item' + (1 === selectedPage ? " disabled" : "")} >
                                    <button className="page-link" onClick={previousPokemonsList}>Previous</button>
                                </li>
                                <li className={'page-item' + (currentStartIndex + 1 === selectedPage ? " active" : "")}>
                                    <button className={'page-link'} onClick={() => changePage(currentStartIndex)}>{currentStartIndex + 1}</button></li>
                                <li className={'page-item' + (currentStartIndex + 2 === selectedPage ? " active" : "")}>
                                    <button className="page-link" onClick={() => changePage(currentStartIndex + 1)}  >{currentStartIndex + 2}</button>
                                </li>
                                <li className={'page-item' + (currentStartIndex + 3 === selectedPage ? " active" : "")}>
                                    <button className="page-link" onClick={() => changePage(currentStartIndex + 2)} >{currentStartIndex + 3}</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link" onClick={nextPokemonsList} >Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                {/* <button >Back</button>
                <button >Next</button> */}
            </div>
        </>
    )

}