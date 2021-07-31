const faq_containers = document.getElementsByClassName("faq-container");
const faq_headers = document.getElementsByClassName("faq");

// faq_containers.addEventListener("click", showDes());
for (i=0; i < faq_containers.length; i++){
    faq_containers[i].addEventListener("click", showDes);
}

function showDes(event){
    // This is executed if TEXT is CLICKED
    if(event.target.className == "faq-header-text"){
        if(event.target.parentElement.parentElement.lastElementChild.className == "description"){
            // This change in className will SHOW the answer to the targeted question
            event.target.parentElement.parentElement.lastElementChild.className = "description-show";

            // This change in className will make the question appear in BOLD LETTERS
            event.target.parentElement.className = "faq-active";

            // This will flip the arrow upwards
            event.target.parentElement.lastElementChild.style.transform = "rotate(180deg)";


        } else if (event.target.parentElement.parentElement.lastElementChild.className == "description-show"){
            // This change in className will HIDE the answer to the targeted question
            event.target.parentElement.parentElement.lastElementChild.className = "description";

            // This change in className will make the question appear in NORMAL LETTERS
            event.target.parentElement.className = "faq";

            // This will flip the arrow downwards
            event.target.parentElement.lastElementChild.style.transform = "rotate(0deg)";
        }    
    }


    // This is executed if ARROW is CLICKED
    else if (event.target.className == "arrow") {
        if(event.target.parentElement.parentElement.parentElement.lastElementChild.className == "description"){
            // This change in className will SHOW the answer to the targeted question
            event.target.parentElement.parentElement.parentElement.lastElementChild.className = "description-show";

            // This change in className will make the question appear in BOLD LETTERS
            event.target.parentElement.parentElement.className = "faq-active";

            // This will flip the arrow upwards
            event.target.parentElement.style.transform = "rotate(180deg)"
        } else if (event.target.parentElement.parentElement.parentElement.lastElementChild.className == "description-show"){
            // This change in className will HIDE the answer to the targeted question
            event.target.parentElement.parentElement.parentElement.lastElementChild.className = "description";

            // This change in className will make the question appear in NORMAL LETTERS
            event.target.parentElement.parentElement.className = "faq";

            // This will flip the arrow downwards
            event.target.parentElement.style.transform = "rotate(0deg)"
        }
    }
    
}