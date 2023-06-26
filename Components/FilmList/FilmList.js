import React, { Component } from "react";
import "./FilmList.css";
import Film from "../Film/Film";
import Loader from "../../AntdComponents/Loader";

export default class FilmList extends Component {

  render() {
    const films = this.props.loading ? (
      <div className="loader">
        <Loader />
      </div>
    ) : (
      <Film filmData={this.props.filmData} />
    );
    const results = this.props.totalResults !== null && this.props.loading === false ? <div className="foundFilms">{`Found ${this.props.totalResults} films`}</div> : null
    return (
      <>
        {results}
        {films}
      </>
    );
  }
}