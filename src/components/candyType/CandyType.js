import React, { Component } from 'react'


class CandyType extends Component {
    render() {
        return (
            <section className="Candy Type">
            <h1>Current Candy Types</h1>
            {
                this.props.candyType.map(candyTypes =>
                    <div key={candyTypes.id}>
                        {candyTypes.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyType