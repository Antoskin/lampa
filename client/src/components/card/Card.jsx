import React from 'react';
import {connect} from 'react-redux';
import {Card as ReactCard, Button} from 'react-bootstrap';
import {setProductToCard} from '../../redux/reducer/bucket.reducer';

function Card(props) {

    const {
        product: {
            thumbnail,
            title,
            description,
            amount,
            _id: id
        },
        setProductToCard
    } = props

    return (
        <ReactCard style={{ width: '18rem' }} className="col-12 col-md-6 col-lg-4">
            <ReactCard.Img variant="top" src={thumbnail} />
            <ReactCard.Body>
                <ReactCard.Title>{title}</ReactCard.Title>
                <ReactCard.Text>
                    {description}
                </ReactCard.Text>
                <ReactCard.Text>
                    price: {amount} $
                </ReactCard.Text>
                <Button variant="success" onClick={() => setProductToCard({id, amount})}>
                    add to card
                </Button>
            </ReactCard.Body>
        </ReactCard>
    );
}

export default connect(null, {setProductToCard})(Card);