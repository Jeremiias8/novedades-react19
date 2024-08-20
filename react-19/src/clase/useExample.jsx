import React, { Suspense, useState } from 'react'

// componente servidor
export const UseFetchExample = () => {
  
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const fetchPokemon = () => {
        if (!name) return Promise.resolve()

        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => { response.json()
                if (response.ok) return response.json()
                    return { 
                        error: true, 
                        message: 'No se pudo encontrar el pokemon' 
                    }                
                })
                .then(data => data)
                .catch(error => 
                    { 
                        setError(true); return { 
                            error: true, 
                            message: 'Error al solicitar la api' 
                }});
    }

  return (
    <div>
        <form
            onSubmit={fetchPokemon}
        >
            <input 
                placeholder='Value del input:' 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required
            />

            <input type='url' id='website' required />
            <input type='text' id='name' autoFocus required />

            <input type='file' id='archivos' multiple />
        </form>

        <Suspense fallback={<div>Cargando...</div>}>
            <ShowPokemon pokemonPromise={fetchPokemon()} />
        </Suspense>
 
        <span>
            {name && ShowPokemon}
        </span>
    </div>
  )

}

// componente cliente
function ShowPokemon ({ pokemonPromise }) {

    const pokemon = use(pokemonPromise);

    if (pokemon?.error) {
        
        return <div>Error: {pokemon.message}</div>
        setError(true);

    } else if (!pokemon) {
        return <div>Loading... {setLoading(true)}</div>;
    }

    if (!pokemon) return null

    return (
        <div>
            Resultado:
            <article>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                />
                <p>Peso: {pokemon.weight}kg</p>
            </article>
        </div>
    )    
}
