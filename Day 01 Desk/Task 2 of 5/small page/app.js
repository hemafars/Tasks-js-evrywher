const text = document.getElementById("text");
const btn = document.getElementById("btn");
const toConsole = document.getElementById("toConsole");

btn.addEventListener("click", () => {
  text.innerHTML = "this my name";
});
toConsole.addEventListener("click", () => {
  console.log("record somthing in console.log");
});
