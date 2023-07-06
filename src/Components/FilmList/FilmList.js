import React, { Component } from "react";
import "./FilmList.css";
import Film from "../Film/Film";
import Loader from "../../AntdComponents/Loader";
import { FilmDataConsumer } from "../../FilmsService/Film-context";

export default class FilmList extends Component {

  render() {
    console.log(this.props.search)
    const films = this.props.loading ? (
      <div className="loader">
        <Loader />
      </div>
    ) : (
      <FilmDataConsumer>
        {
          (val) => {
            return (
              <Film filmData={this.props.filmData} search={this.props.search} ratedFilms={this.props.ratedFilms} genres={val} addRating={this.props.addRating} guest_id={this.props.guest_id}/>
            )
          }
        }
      </FilmDataConsumer>
    );
    const results =
      this.props.totalResults !== null && this.props.loading === false ? (
        <div className="foundFilms">{`Found ${this.props.totalResults} films`}</div>
      ) : null;
    return (
      <>
        {results}
        {films}
      </>
    );
  }
}
