/* alpha: utils.js */

function loadJSON(file, callback) {

  const request = new XMLHttpRequest();

  request.overrideMimeType("application/json");
  request.open('GET', file, true);

  request.onreadystatechange = function () {

    if (request.readyState == 4 && request.status == "200") {
      callback(request.responseText);
    }

    if (request.status == "404") {
      console.log("Erro ao carregar o JSON: " + file + " " + request.status);
    }
  };

  request.send(null);
}