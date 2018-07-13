window.onload = function(){
    button_msg = ["Try again!", "Another!", "How about another, eh?", "Again!", "What to watch?", "So many choices!", "So many movies!", "OMG", "Yeet", "One more time!", "Again! Again!"];
    document.getElementById("button").onclick = function () {
      var data = "https://movie-gen.herokuapp.com/movies.json";
      var request = new XMLHttpRequest();
      request.open("GET", data, true);
      request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        request = request.responseText;
        parsed = JSON.parse(request);

        if (parsed.hasOwnProperty('title') && (parsed['title'] != " ")) {
            movie = document.getElementById("movie");
            movie.innerHTML = parsed['title'];

            if (parsed.hasOwnProperty('original_language') && (parsed['original_language'] != " ")) {
              language = document.getElementById("language");
              language.innerHTML = parsed['original_language'].toUpperCase();
            } else {
              language.innerHTML = " ";
            }

            if (parsed.hasOwnProperty('genres') && (parsed['genres'].length > 0)) {
                genre = document.getElementById("genre");
                genre.innerHTML = parsed['genres'][0]['name'];
              } else {
                genre.innerHTML = " ";
              }

            if (parsed.hasOwnProperty('overview') && (parsed['overview'] != " ")) {
                overview = document.getElementById("overview")
                overview.innerHTML = parsed['overview'];
              } else {
                overview.innerHTML = " ";
              }
            } else {

              movie.innerHTML = "Click again!";
              language.innerHTML = " ";
              genre.innerHTML = " ";
              overview.innerHTML = " ";
            }
        }
    }

    button = document.getElementById("button");
    idx = Math.floor(Math.random() * (button_msg.length));
    button.innerHTML = button_msg[idx];

    request.send();
  }
}
