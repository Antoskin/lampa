import React from 'react';
import {connect} from 'react-redux';
import {ImBoxAdd} from 'react-icons/im'
import {Card as BCard, Button} from 'react-bootstrap';
import {addToBucket} from '../../redux/reducer/bucket.reducer';

function Card(props) {

    const {
        product: {
            thumbnail,
            title,
            description,
            amount,
            _id: id
        },
        addToBucket,
    } = props

    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <BCard style={{ width: '18rem' }}>
                <BCard.Img variant="top" src={thumbnail} />
                <BCard.Body>
                    <BCard.Title>{title}</BCard.Title>
                    <BCard.Text>
                        {description}
                    </BCard.Text>
                    <BCard.Text>
                        price: {amount} $
                    </BCard.Text>
                    <Button variant="success"
                            onClick={() => addToBucket(id)}>
                        <ImBoxAdd />
                    </Button>
                </BCard.Body>
            </BCard>
        </div>
    );
}

export default connect(null, {addToBucket})(Card);