import { Component } from "react";

export default class FilmsService extends Component {
  async getFilms(label, page) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${label}&api_key=dda4727764b73e18a45ed49f2d35ba07&page=${page}`
    );
    const res1 = await res.json();
    return [res1.results, res1.total_pages, res1.total_results];
  }

  async guestSession() {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=dda4727764b73e18a45ed49f2d35ba07"
    );
    const res1 = await res.json();
    return res1.guest_session_id;
  }

  async getGenres() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE0NzI3NzY0YjczZTE4YTQ1ZWQ0OWYyZDM1YmEwNyIsInN1YiI6IjY0OTA3MWFmMmY4ZDA5MDExZDI1NTExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v46VjRbXQKty3VicZVdxsVwqbSa6o6niB_utx_K5vHs",
      },
    };
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const res1 = await res.json();
    return res1;
  }

  async addRating(id, value, session) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=dda4727764b73e18a45ed49f2d35ba07&guest_session_id=${session}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ value }),
      }
    );
    const res1 = await res.json();
    console.log(res1)
    return res1;
  }

  async getRating(session) {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${session}/rated/movies?api_key=dda4727764b73e18a45ed49f2d35ba07`
    );
    const res1 = await res.json();
    console.log(res1)
    return res1;
  }
}
