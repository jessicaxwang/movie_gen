window.onload = function(){
    console.log("opened")
    button_msg = ["Try again!", "Another!", "How about another, eh?", "Again!", "What to watch?", "So many choices!", "So…many…movies…"];
    document.getElementById("button").onclick = function () {
      var data = "https://movie-gen.herokuapp.com/movies.json";
      var request = new XMLHttpRequest();
      request.open("GET", data, true);
      request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        request = request.responseText;
        parsed = JSON.parse(request);

        if (parsed.hasOwnProperty('title')) {
          movie = document.getElementById("movie");
          movie.innerHTML = parsed['title'];
        }

        if (parsed.hasOwnProperty('original_language')) {
        language = document.getElementById("language");
        language.innerHTML = parsed['original_language'].toUpperCase();
        }

        if (parsed.hasOwnProperty('genres')) {
          genre = document.getElementById("genre");
          genre.innerHTML = parsed['genres'][0]['name'];
        }

        if (parsed.hasOwnProperty('overview')) {
          overview = document.getElementById("overview")
          overview.innerHTML = parsed['overview'];
        }

        button = document.getElementById("button");

        idx = Math.floor(Math.random() * (button_msg.length));
        button.innerHTML = button_msg[idx];
      }
    }
    request.send();
  }
}
