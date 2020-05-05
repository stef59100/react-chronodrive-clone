import React from 'react';
import { Helmet } from 'react-helmet';

class Subcategory extends React.Component {
    componentDidMount(){
     
    }


    render(){
        const { handle } = this.props.match.params;
        return (
            <div>test {handle}</div>
        )
    }
}

export default Subcategory;