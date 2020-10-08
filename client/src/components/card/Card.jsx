import React from 'react';
import {Card as ReactCard, Button} from 'react-bootstrap';

function Card(props) {

    const {
        product: {
            thumb,
            title,
            description,
            price
        }
    } = props

    return (
        <ReactCard style={{ width: '18rem' }} className="col-12 col-md-6 col-lg-4">
            <ReactCard.Img variant="top" src={thumb} />
            <ReactCard.Body>
                <ReactCard.Title>{title}</ReactCard.Title>
                <ReactCard.Text>
                    {description}
                </ReactCard.Text>
                <ReactCard.Text>
                    price: {price} $
                </ReactCard.Text>
                <Button variant="primary">
                    add to card
                </Button>
            </ReactCard.Body>
        </ReactCard>
    );
}

export default Card;