import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const PokemonCard = ({ url }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get(url).then((resp) => setDetail(resp.data));
  }, [url]);

  return (
    <div className="pokemon-card">
        <Link to={`/pokedex/${detail?.id}`}>
            <Col>
                <Card>
                <Card.Img variant="top" src={detail.sprites?.other["home"].front_default} alt="" />
                <Card.Body>
                    <Card.Title>{detail.name} </Card.Title>
                    <Card.Text>
                    N° {detail?.id}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Link>
    </div>
  );
};

export default PokemonCard;