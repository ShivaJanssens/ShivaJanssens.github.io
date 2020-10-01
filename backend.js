var xhr = new XMLHttpRequest();
var url = "http://127.0.0.1:8000/nlp/returnOrganisations/";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

var data = JSON.stringify({"url": "https://hehe.be", "text": "My name is Shiva and I work at Solita Belgium."});
xhr.send(data);