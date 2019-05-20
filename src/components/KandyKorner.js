import React, { Component } from 'react'
import StoreLocations from "./locations/LocationList"
import EmployeeList from "./employees/EmployeeList"
import CandyType from "./candyType/CandyType"
import IndividualCandies from "./candies/IndividualCandies"


export default class Kennel extends Component {
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" },
        { id: 3, name: "Nashville East", address: "7210 Gallatin Ave" }
    ]

    employeesFromAPI = [
        { id: 1, name: "Emily Loggins" },
        { id: 2, name: "Heather Cleland" },
        { id: 3, name: "Addam Joor" },
        { id: 4, name: "Eliot Clarke" }
    ]

    candyTypeFromAPI = [
        { id: 1, name: "sucker" },
        { id: 2, name: "hard candies" },
        { id: 3, name: "chocolate bar" },
        { id: 4, name: "soft candies" }
    ]

    IndividualCandiesFromAPI = [
        { id: 1, name: "DumDum" },
        { id: 2, name: "Jolly Rancher" },
        { id: 3, name: "Crunch" },
        { id: 4, name: "Gummy Bear" }
    ]


    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        candyType: this.candyTypeFromAPI,
        individualCandies: this.IndividualCandiesFromAPI

    }
    // setNewJoke = (jokeObj) => {
    //     this.setState({
    //         id: jokeObj.id,
    //         type: jokeObj.type,
    //         setup: jokeObj.setup,
    //         punchline: jokeObj.punchline
    //     })
    // }
    render() {
        return (
            <div>
                <EmployeeList employees={this.state.employees}/>
                <hr></hr>
                <StoreLocations locations={this.state.locations}/>
                <hr></hr>
                <CandyType candyType={this.state.candyType}/>
                <hr></hr>
                <IndividualCandies individualCandies={this.state.individualCandies}/>
                {/* {<Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJoke={this.setNewJoke}
                /> } */}
            </div>
        );
    }
}