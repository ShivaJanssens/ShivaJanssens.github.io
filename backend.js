function submitRequest() {
    var urlInput = document.getElementById('url').value;
    var text = document.getElementById('text').value;

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/nlp/returnOrganisations/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);

            var responseTitle = json["text"];
            var responseUrl = json["url"];
            
            var ul = document.getElementById("responseList");
            var liText = document.createElement("li");
            liText.appendChild(document.createTextNode(responseTitle));
            var liUrl = document.createElement("li");
            liUrl.appendChild(document.createTextNode(responseUrl));
            ul.appendChild(liText);
            ul.appendChild(liUrl);

        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);
}



