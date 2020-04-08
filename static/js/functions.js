function toggle_form_state(element){
    if(element.id == 'query_btn'){
        query_btn.style.opacity = 1.0;
        upload_btn.style.opacity = 0.5;
        return
    }

    if (element.id == 'upload_btn'){
        query_btn.style.opacity = 0.5;
        upload_btn.style.opacity = 1.0;
        return
    }
}