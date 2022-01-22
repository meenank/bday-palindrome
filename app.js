const date_inp = document.querySelector(".date-input");
const btn = document.querySelector("button");
const res_para = document.querySelector(".result");

function checkWiring() {

    console.log(date_inp.value);
    console.log("Clicked");
    res_para.innerHTML = date_inp.value;

}

btn.addEventListener("click", checkWiring);