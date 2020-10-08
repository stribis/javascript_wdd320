fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    const app = document.getElementById("app");
    //ein div für alle filme mit der classe movie
    const movies = document.createElement("div");
    movies.setAttribute("class", "movies");
    app.appendChild(movies);

    console.log(data);

    data.forEach((movie) => {
      //ein div/box für einzelne filme mit der classe moviedetail
      const moviedetail = document.createElement("div");
      moviedetail.setAttribute("class", "moviedetail");

      //film titel
      const title = document.createElement("h2");
      title.textContent = `${movie.title} `;

      //director/producer
      const director = document.createElement("p");
      director.textContent = `Director by: ${movie.director} Producer: ${movie.producer}`;

      //erklärung
      const desc = document.createElement("p");
      desc.textContent = `${movie.description}...`;

      //alles ins div moviedetail hinzufügen
      movies.appendChild(moviedetail);
      moviedetail.appendChild(title);
      moviedetail.appendChild(director);
      moviedetail.appendChild(desc);
    });
  });
