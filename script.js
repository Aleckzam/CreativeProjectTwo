    const url = "https://api.kanye.rest";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";

        results += "\"" + json.quote + "\"";
        //results += "<div class= \"row\" styles = \"background-color:\" "+json[1].hex+"> </div>";

        document.getElementById("kanyeResult").innerHTML = results;
    });
