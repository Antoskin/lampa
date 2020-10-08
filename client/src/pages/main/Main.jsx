import React from 'react';
import Card from '../../components/card';


function Main({data}) {
    console.log('data', data);
    return (
        <div className="row">
            {data.map(product => <Card key={product.id} product={product} />)}
        </div>
    );
}

export default Main;