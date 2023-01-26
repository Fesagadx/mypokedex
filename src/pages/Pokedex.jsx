import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import { useSelector } from 'react-redux' 
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const [ types, setTypes ] = useState( [] )
    const [ pokemons, setPokemons ] = useState( [] )
    const [ pokemonsAll, setPokemonsAll ] = useState( [] )

    const name = useSelector( state => state.username )


    const [page, setPage] = useState(1);
    const pokemonsPerPage = 4;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;

    const pokemonsPaginated = pokemons?.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

    const pagesNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
    }



    const navigate = useNavigate()

    useEffect(() => {

        axios.get( "https://pokeapi.co/api/v2/type" )
            .then( (resp) => setTypes( resp.data.results ))
            .catch( error => console.error(error) )

        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0" )
            .then( resp => setPokemons( resp?.data?.results ) )
            .catch( error => console.error(error) )

        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0" )
            .then( resp => setPokemonsAll( resp?.data?.results ) )
            .catch( error => console.error(error) )
    }, [])


    const selectedType = (e) => {
        const url = e.target.value
        console.log("E",e)
        console.log("url",url)

        axios
        .get( url )
        .then( resp => {
            setPokemons(resp.data.pokemon);
            setPage(1);
        })
        .catch( error => console.error(error) )
    }

    const selectedName = (e) => {
        const name = e.target.value
        console.log("E",e)
        if(name!=""){
            const filteredPokemons = pokemonsAll.filter(pokemon =>
                pokemon.name.includes(name.toLowerCase())
            );
    
            setPokemons(filteredPokemons)
        }
        
    }


    return (
        <div>
            <h1 className="welcome">WELCOME "{name}"</h1>
            <h2 className="welcome-des">Here you can find your favorite pokemon</h2>
            
            <div className="welcome-des">
                <input onChange={selectedName} placeholder="Find your pokemon"></input>
                <select onChange={selectedType}>
                    {
                        types?.map( type => (
                            <option value={type.url} key={type.name}>{type.name}</option>
                        ) )
                    }
                </select>
            </div>
            <ul>
                <Row xs={1} md={4} className="g-2">
                    {
                        pokemonsPaginated.map( (item, index) => (
                            <PokemonCard
                            key={index}
                            url={ item.pokemon ? item.pokemon.url : item.url }
                            />
                        ))
                    }
                </Row>
            </ul>

            {
            /*
            REACT NATIVE
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previo
                </button>

                {pagesNumbers.map((num) => (
                <button key={num} onClick={() => setPage(num)}>
                    {num}
                </button>
                ))}

                <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                >
                Siguiente
                </button>
            </div>
            */
            }

            <PaginationControl
                page={page}
                between={4}
                total={pokemons.length}
                limit={pokemonsPerPage}
                changePage={(page) => {
                setPage(page); 
                }}
                ellipsis={1}
            />
        </div>
    )
}

export default Pokedex