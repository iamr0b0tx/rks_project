function toggle_form_state(element){
    if(element.id == 'query_btn'){
        query_btn.style.opacity = 1.0;
        upload_btn.style.opacity = 0.5;
        submit_btn.innerHTML = "Predict";
        value_input.setAttribute("disabled", "disabled");
        return
    }

    if (element.id == 'upload_btn'){
        query_btn.style.opacity = 0.5;
        upload_btn.style.opacity = 1.0;
        submit_btn.innerHTML = "Upload";
        value_input.removeAttribute("disabled");
        return
    }
}