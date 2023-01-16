import { Component } from "react";
class ComponenteUno extends Component {
    render() { 
        const {lastName, firstName} = this.props;
        return (
            <>
                <h1>{lastName}{firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </>
        )
    }
}

export default ComponenteUno;