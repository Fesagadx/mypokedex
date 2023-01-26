import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PokemonDetail = () => {

    const [ data, setData ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    console.log("data",data)

    useEffect(() => {

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => setData(resp.data))

    }, [id])

    return(
        <div className="pokemon-detail">
            <Link to="/">
                <Button variant="primary">
                    <HomeIcon></HomeIcon>Return Home
                </Button>
            </Link>
            <Button onClick={ () => navigate(-1) } variant="success">
                <ArrowBackIcon></ArrowBackIcon>Back
            </Button>
            
            <h1>{data?.name}</h1>
            <img src={data.sprites?.other["official-artwork"].front_default} alt="" />

            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>Experience</Card.Title>
                    <Card.Text>
                        {data?.base_experience}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        {data?.height}  
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>Order</Card.Title>
                    <Card.Text>
                        {data?.order}  
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img />
                    <Card.Body>
                    <Card.Title>Weight</Card.Title>
                    <Card.Text>
                        {data?.weight}  
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>

    )
}

export default PokemonDetail
