console.log("hii");

let addSomething = document.querySelector("#addSomething");

let addItem = document.querySelector("#addBtn");

var arr = [];

console.log(addSomething.value);
addItem.addEventListener("click", (evt) => {
  let displayList = document.createElement("div");
  let deleteBtn = document.createElement("p");
  let displayListArray = [];

  displayList.classList.add("displayList");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerText = "Delete";
  displayList.innerText = addSomething.value;
  var someValue = addSomething.value;
  var xx = sessionStorage.getItem(`displayList${someValue}`);

  if (xx === addSomething.value) {
    alert("This is already present..");
    const synth3 = window.speechSynthesis;
    let ourText3 = "This is already present....";
    const utterThis3 = new SpeechSynthesisUtterance(ourText3);
    synth3.speak(utterThis3);
    addSomething.value = "";
  }
  else {

    if (addSomething.value !== "") {
      document.body.appendChild(displayList);
      displayList.appendChild(deleteBtn);
      arr.push(addSomething.value)
      displayListArray.push(arr);
      sessionStorage.setItem(`displayList${someValue}`, addSomething.value);
      const synth = window.speechSynthesis;
      let ourText = "Hey You added item.." + addSomething.value;
      const utterThis = new SpeechSynthesisUtterance(ourText)
      synth.speak(utterThis);
      addSomething.value = "";
    }
    else {
      evt.preventDefault();
      alert("Please add something..");
      const synth4 = window.speechSynthesis;
      let ourText4 = "Please add something..";
      const utterThis4 = new SpeechSynthesisUtterance(ourText4)
      synth4.speak(utterThis4);
    }
  }

  deleteBtn.addEventListener("click", (e) => {
    displayList.remove();
    let index1 = arr.indexOf(someValue.toString());
    arr.splice(index1, 1);
    const synth1 = window.speechSynthesis;
    let ourText1 = "You deleted item.." + someValue;
    const utterThis1 = new SpeechSynthesisUtterance(ourText1)
    synth1.speak(utterThis1);
    sessionStorage.removeItem(`displayList${someValue}`);
  });
});







