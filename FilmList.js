import React, { Component } from "react";
import Loader from "../Loader/Loader";
import "./FilmList.css";
import Film from "../Film/Film";
import debounce from 'lodash.debounce';

export default class FilmList extends Component {

  state = {
    label: "",
    filmData: null,
    loading: false
  };

  async getFilms () {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${this.state.label}&api_key=dda4727764b73e18a45ed49f2d35ba07`
      );
      const res1 = await res.json();
      return res1.results
  }

  addFilms = debounce (() => {
      this.getFilms().then((arr) => {
        this.setState({
          filmData: arr,
          loading: false
        });
      });
    }, 1000)

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
      loading: true
    }, console.log(this.state.label))
    let strArr = e.target.value.split('')
    if (strArr[0] != " " && strArr[strArr.length -1] != " "){
      this.addFilms()
    }
  };

  render() {
    const laoder = this.state.loading ? <div className="loader"><Loader /></div> : null
    const films = this.state.loading ?  null : <Film filmData={this.state.filmData} />
    return (
      <>
      <div className="search-form">
        <input
          placeholder="Search films"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        </div>
        {laoder}
        {films}
        </>
    )
  }
}