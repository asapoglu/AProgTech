//selecting all required elements
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .start");


info_box.classList.add("activeInfo"); //show info box


// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

