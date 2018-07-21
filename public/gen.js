window.onload = function(){
    button_msg = ["Try again!", "Another!", "How about another, eh?", "Again!", "What to watch?", "So many choices!", "So many movies!", "Why not try one more time?", "Isn't this fun?", "One more time!", "Again! Again!", "Click me!"];

    document.getElementById("button").onclick = function () {
      var data = "https://movie-gen.herokuapp.com/movies.json";
      var request = new XMLHttpRequest();
      request.open("GET", data, true);
      request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        request = request.responseText;
        parsed = JSON.parse(request);

        /* Randomized element of returned JSON array */
        idx = Math.floor(Math.random() * parsed['results'].length);

        movie = document.getElementById("movie");
        date = document.getElementById("date");
        language = document.getElementById("language");
        overview = document.getElementById("overview")

        /* Ensure title exists */
        if (parsed['results'][idx].hasOwnProperty('title') && (parsed['results'][idx]['title'] != " ")) {
            movie.innerHTML = parsed['results'][idx]['title'];

            if (parsed['results'][idx].hasOwnProperty('release_date') && parsed['results'][idx]['release_date'] != " ") {
              date.innerHTML = parsed['results'][idx]['release_date'].substr(0,4);
            }

            if (parsed['results'][idx].hasOwnProperty('original_language') && (parsed['results'][idx]['original_language'] != " ")) {
              language.innerHTML = parsed['results'][idx]['original_language'].toUpperCase();
            } else {
              language.innerHTML = " ";
            }

            if (parsed['results'][idx].hasOwnProperty('overview') && (parsed['results'][idx]['overview'] != " ")) {
                overview.innerHTML = parsed['results'][idx]['overview'];
              } else {
                overview.innerHTML = " ";
              }
            } else {
              movie.innerHTML = "Click again!";
              date.innerHTML = " ";
              language.innerHTML = " ";
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
