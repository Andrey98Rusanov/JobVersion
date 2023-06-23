import React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

function Film({filmData}){

    function overwiewValidation(str) {
       const arr = str.split(" ");
       const resArr = arr.slice(0, 25);
       const resStr = resArr.join(" ");
       if (resStr[resStr.length - 1] === ",") return `${resStr.slice(0, -1)}...`;
       return `${resStr}...`;
     }
   
     let films = [];
       console.log(filmData);
       if (filmData != null) {
         for (let el of filmData) {
           let img = "https://image.tmdb.org/t/p/w500/" + el.poster_path;
           let genre = [];
           for (let n of el.genre_ids) {
             genre.push(<span>{n} </span>);
           }
           
           films.push(
             <div key={el.id} className="film">
               <img src={img} alt="poster" className="poster" />
               <div className="film_info">
                 <h1 className="title">{el.title}</h1>
                 <span className="date">
                   {format(new Date(el.release_date), "MMMM d, yyyy", {
                     lacale: enGB,
                   })}
                 </span>
                 <div className="genre">{genre}</div>
                 <div className="discription">
                   {overwiewValidation(el.overview)}
                 </div>
               </div>
             </div>
           );
         }
       }
   
       return <div className="films">{films}</div>;
     }

     export default Film;