let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("li");
let ulist = document.querySelector("ul");

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  let delBtn = document.createElement("button");

  list.innerText = inp.value;
  delBtn.innerText = "Delete";

  ulist.appendChild(list);
  list.appendChild(delBtn);
  delBtn.setAttribute("class", "delBtn");

  inp.value = "";

  delBtn.addEventListener("click", () => {
    ulist.removeChild(list);
  });
});

inp.addEventListener("keypress", () => {
  if (inp.value !== "") {
    if (event.key === "Enter") {
      btn.click();
    }
  }
});

// btn.addEventListener("click", function (event) {
//   console.dir(delBtn);
// });
