function submitRequest() {
    var urlInput = document.getElementById('url').innerHTML;
    var text = document.getElementById('text').innerHTML;

    console.log(urlInput)
    console.log(text)

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/nlp/returnOrganisations/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json)
            console.log(json.url + ", " + json.text + ", " + json.companies);
        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);

    console.log("request send")
}



