import React from 'react';
import Main from './Main';
import {connect} from 'react-redux';

function MainContainer({products: {data}}) {

    return (
        <Main data={data} />
    );
}

export default connect(({products}) => ({products}))(MainContainer);