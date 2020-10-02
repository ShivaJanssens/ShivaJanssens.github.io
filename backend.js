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

            var responsePersons = json['persons'];
            var responseCompanies = json['companies'];
            
            var ul = document.getElementById("responseList");
            var liText = document.createElement("li");
            liText.appendChild(document.createTextNode('URL: ' + responseTitle));
            var liUrl = document.createElement("li");
            liUrl.appendChild(document.createTextNode('Title:' + responseUrl));

            ul.appendChild(liUrl);
            ul.appendChild(liText);

            responsePersons.forEach(p => {
                var liPerson = document.createElement("li");
                liPerson.appendChild(document.createTextNode('Person: ' + p));
                ul.appendChild(liPerson)
            });
        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);
}



