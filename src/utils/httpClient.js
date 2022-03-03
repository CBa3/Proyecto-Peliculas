const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
      headers: { 
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQyMjM3MzU3NDBjNzAyNmZkNDVjYjUwMmI4ODJlNiIsInN1YiI6IjYyMjA0ZDE2ZTE5NGIwMDAxYjc2NjhhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4hIoj8G570QhoFZUPwcSYhWf0sKOQhfUz0WaOiJShY",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json());
}