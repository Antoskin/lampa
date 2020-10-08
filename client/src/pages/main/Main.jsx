import React from 'react';
import Card from '../../components/card';


const Main = ({data}) => (
    <div className="row">
        {data.map((product, id) => (
            <Card key={id} product={product} />
        ))}
    </div>
)

export default Main;