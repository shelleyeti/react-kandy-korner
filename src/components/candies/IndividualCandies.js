import React, { Component } from 'react'


class IndividualCandies extends Component {
    render() {
        return (
            <section className="Individual Candies">
            <h1>Current Individual Candies</h1>
            {
                this.props.individualCandies.map(individualCandy =>
                    <div key={individualCandy.id}>
                        {individualCandy.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default IndividualCandies