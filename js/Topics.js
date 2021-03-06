function submitRequest() {
    var companyInput = document.getElementById('companyInput').value;

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/nlp/getRelatedPosts/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            
            var ul = document.getElementById("responseList");
            ul.style.cssText = 'background-color: #c1f7cf;border-color: #4db869;border-radius: 5px;padding: 15px;list-style-type: none;font-size: 1.1em;';
            ul.innerHTML = "";

            // var liText = document.createElement("li");
            // liText.appendChild(document.createTextNode('Text: ' + responseTitle));
            // var liUrl = document.createElement("li");
            // liUrl.appendChild(document.createTextNode('URL:' + responseUrl));

            // ul.appendChild(liUrl);
            // ul.appendChild(liText);

            json.forEach(p => {
                var liTitle = document.createElement("li");
                liTitle.appendChild(document.createTextNode('Title: ' + p['title']));
                ul.appendChild(liTitle);
                var liUrl = document.createElement("li");
                liUrl.appendChild(document.createTextNode('Url: ' + p['url']));
                ul.appendChild(liUrl);
                var blank = document.createElement("li");
                blank.appendChild(document.createTextNode('-'));
                ul.appendChild(blank);
            });

            // responseCompanies.forEach(c => {
            //     var liCompany = document.createElement("li");
            //     liCompany.appendChild(document.createTextNode('Company: ' + c));
            //     ul.appendChild(liCompany);
            // });
        }
    };

    var data = JSON.stringify({"company": companyInput});
    xhr.send(data);
}



