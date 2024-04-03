//variable
const input = document.querySelector("#numIpt");
const btn = document.querySelector("button");
const span = document.querySelector(".number");
const errInput = document.querySelector(".error");


//onclick
function btnClick() {
  let num = input.value;
  let cul = Math.ceil(num * 0.025);
  if(String(num).charAt(0) == 0 || num <= 0 || num == "")
  {
    textError();
  }
  else
  {
    if (num > 0) 
    {
      errInput.innerHTML = "";
      span.innerHTML = `${cul} جنيهًا`;
    }
    else
    {
      textError();
    }
  }
};

function textError(){
  errInput.innerHTML = `
  <i class="fa-solid fa-xmark"></i> برجاء إدخال المبلغ صحيح`;
  span.innerHTML = "- - جنيهًا";
}