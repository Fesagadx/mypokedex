import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../store/slices/username.slice';
import { useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Home = () => {

    document.body.style.background="silver";
    const name = useSelector( state => state.username )
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
        dispatch( changeName( e.target[0].value ) )

        navigate( "/pokedex" )
    }

        return (

            <div className="name-card">
                <div className="welcome-card">
                    Hello trainer!
                </div>
                <CatchingPokemonIcon style={{ fontSize: 300 }}></CatchingPokemonIcon>
                <div>
                    Give me your name to start
                    
                </div>
                <form className="button-card" action="" onSubmit={ (e) => handleSubmit(e) }>
                    
                    <input type="text" />
                    <button ><CheckCircleOutlineIcon>
                        </CheckCircleOutlineIcon>
                    </button>
                </form>
            </div>
        )
}

export default Home

