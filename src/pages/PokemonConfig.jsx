import { useState } from 'react';

const PokemonConfig = () => {
    
    const [datos, estableceDatos] = useState('');

    const enviandoDatos = () => {
        estableceDatos("Enviando datos");
      }

        return (

            <div>

            </div>
            
        )
}

export default PokemonConfig

