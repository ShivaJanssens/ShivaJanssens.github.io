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

            var sentiment = json['sentiment'];
            
            var ul = document.getElementById("responseList");
            ul.style.cssText = 'background-color: #c1f7cf;border-color: #4db869;border-radius: 5px;padding: 15px;list-style-type: none;font-size: 1.1em;';
            ul.innerHTML = "";
            var liText = document.createElement("li");
            liText.appendChild(document.createTextNode('Text: ' + responseTitle));
            var liUrl = document.createElement("li");
            liUrl.appendChild(document.createTextNode('URL:' + responseUrl));

            ul.appendChild(liUrl);
            ul.appendChild(liText);

            responsePersons.forEach(p => {
                var liPerson = document.createElement("li");
                liPerson.appendChild(document.createTextNode('Person: ' + p));
                ul.appendChild(liPerson);
            });

            responseCompanies.forEach(c => {
                var liCompany = document.createElement("li");
                liCompany.appendChild(document.createTextNode('Company: ' + c));
                ul.appendChild(liCompany);
            });

            var liSentiment = document.createElement("li");
            liSentiment.appendChild(document.createTextNode('Sentiment: ' + sentiment));   
            ul.appendChild(liSentiment);
        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);
}



