function submitRequest() {
    var urlInput = document.getElementById('url').value;
    var text = document.getElementById('text').value;

    console.log(urlInput)
    console.log(text)

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/nlp/returnOrganisations/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);

            var responseTitle = json[text];
            var responseUrl = json[url];

            console.log(responseTitle)
            console.log(responseUrl)
            
            var ul = document.getElementById("responseList");
            var liText = document.createElement("li");
            liText.appendChild(document.createTextNode(responseTitle));
            ul.appendChild(liText);

        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);
}



