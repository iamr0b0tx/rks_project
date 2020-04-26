// initialize element object
var username = document.getElementById('username');
var email = document.getElementById('email');

var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');

var signup_message = document.getElementById('signup_message');

// post username and passwword to api to signin
function signup(){
    if (password1.value != password2.value){
        alert("Passwords Do not match!");
        return
    }

    var payload = {
        "username": username.value,
        "email": email.value,
        "password1": password1.value,
        "password2": password2.value
    };

    send_post_request(window.location.origin + '/api/rest-auth/registration/', payload, function (data, status){
        msg = '';
        msg += !data.username ? '' : data.username;
        msg += !data.email ? '' : data.email;
        msg += !data.password1 ? '' : data.password1;
        msg += !data.password2 ? '' : data.password2;
        msg += !data.non_field_errors ? '' : data.non_field_errors;
        if(msg.trim().length) alert(msg);

        if (status == 200 || status == 201){
            signup_message.innerHTML = "Creating " + username.value + " Account!";

            // Store token in browser
            sessionStorage.setItem("token", data["key"]);
            sessionStorage.setItem("username", username.value);
            
            // go home
            location.href = window.location.origin + "/rk/"

        }else{
            signup_message.innerHTML = "Sign Up Failed!";

        }
        
    }, use_token=false)
}
