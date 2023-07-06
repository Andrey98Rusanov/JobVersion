import React, { Component } from "react";

export default class RatedButtons extends Component {

    onRatedClick = () => {
        this.props.getRatedFilms()
        this.props.Rated()
    }

    render() {
        return (
            <>
                <button onClick={this.onRatedClick}>Rated</button>
                <button onClick={this.props.Search}>Search</button>
            </>
        )
    }
}