import {
    useParams
} from "react-router-dom";

export function PokemonDetail() {

    let { id } = useParams<{ id: string }>();

    return (
        <>
            <div>Pokemon Detail {id}</div>
        </>
    )
}