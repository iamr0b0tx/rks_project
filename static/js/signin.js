// initialize element object
var username = document.getElementById('username');
var password = document.getElementById('password');

var signin_message = document.getElementById('signin_message');

// post username and passwword to api to signin
function signin(){
    var payload = {
        username: username.value,
        password: password.value,
    };

    send_post_request('api/rest-auth/login/', payload, function (data, status){

        if(status == 200){
            signin_message.innerHTML = "Welcome, " + username.value + "!";

            // Store token in browser
            sessionStorage.setItem("token", data["key"]);
            sessionStorage.setItem("username", username.value);

            // go home
            location.href = "/"

        }else{
            signin_message.innerHTML = "Sign in Failed!";

        }
        
    }, use_token=false)
}
