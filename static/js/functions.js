// custom functions to help page

serialize = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

function send_request(url, callback, method, data, use_token) {
    console.log(url);
    console.log(data);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            return callback(JSON.parse(xmlhttp.responseText), xmlhttp.status);
        }
    }

    xmlhttp.open(method, url, true);

    if(use_token) xmlhttp.setRequestHeader('Authorization', 'Token ' + sessionStorage.getItem("token"));

    if(method == 'GET'){
        xmlhttp.send();
    }

    if (method == 'POST') {
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(serialize(data));
    }
    
}

function send_get_request(url, callback, use_token=true){
    return send_request(url, callback, "GET", null, use_token);
}

function send_post_request(url, data, callback, use_token=true){
    return send_request(url, callback, "POST", data, use_token);
}

function toggle_form_state(element){
    if(element.id == 'query_btn'){
        query_btn.style.opacity = 1.0;
        upload_btn.style.opacity = 0.5;
        submit_btn.innerHTML = "Predict";
        value_input.setAttribute("disabled", "disabled");
    
    }else{
        query_btn.style.opacity = 0.5;
        upload_btn.style.opacity = 1.0;
        submit_btn.innerHTML = "Upload";
        value_input.removeAttribute("disabled");
    }
}