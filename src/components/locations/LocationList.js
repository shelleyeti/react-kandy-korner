import React, { Component } from 'react'


class StoreLocations extends Component {
    render() {
        return (
            <section className="Store Locations">
            <h1>Current Location List</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                        : {location.address}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreLocations