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
            
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode("Water");  
            var textnode = document.createTextNode("Wind");     
            var textnode = document.createTextNode(responseTitle);   
            var textnode = document.createTextNode(responseUrl);         // Create a text node
            node.appendChild(textnode);       // Create a text node
            node.appendChild(textnode);     // Create a text node
            node.appendChild(textnode);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("responseDev").appendChild(node);     // Append <li> to <ul> with id="myList" 

        }
    };

    var data = JSON.stringify({"url": urlInput, "text": text});
    xhr.send(data);

    console.log("request send")
}



