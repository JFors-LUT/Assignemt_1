//import "./styles.css";

//document.getElementById("app").innerHTML = `
//<h1>Hello Vanilla!</h1>
//<div>
//We use the same configuration as Parcel to bundle this sandbox, you can find more
//  info about Parcel
// <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//</div>
//`;

function createTable() {
  var body = document.body;
  var tbl = document.createElement("table");
  /*   tbl.style.width = "100px";
  tbl.style.border = "1px solid black"; */

  for (var i = 0; i < 5; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < 5; j++) {
      var td = tr.insertCell();
      var button = document.createElement("button");
      button.style.height = "50px";
      button.style.width = "50px";
      button.setAttribute("id", "b" + i + j);

      td.appendChild(button);
      td.style.border = "1px solid black";
    }
  }
  body.appendChild(tbl);
}

createTable();

var move = document.body;
move.addEventListener("click", (event) => {
  buttonActivate();
  event.stopPropagation();
});
var X_moves = [];
var O_moves = [];
var turncounter = 0;
var buttons = document.getElementsByTagName("button");
var buttonsC = buttons.length;
for (var i = 0; i < buttonsC; i++) {
  buttons[i].onclick = function (e) {
    var clicked = document.getElementById(this.id);
    if (turncounter % 2 === 0) {
      clicked.innerHTML = "X";
      X_moves.push(this.id);
    } else {
      clicked.innerHTML = "O";
      O_moves.push(this.id);
    }
  };
}

function buttonActivate() {
  // var buttons = document.getElementsByTagName("button");
  // var buttonsC = buttons.length;
  for (var i = 0; i < buttonsC; i++) {
    buttons[i].onclick = function (e) {
      var clicked = document.getElementById(this.id);
      var char = document.getElementById(this.id).textContent;
      if (char === "") {
        if (turncounter % 2 === 0) {
          clicked.innerHTML = "X";
          X_moves.push(this.id);
        } else {
          clicked.innerHTML = "O";
          O_moves.push(this.id);
        }
      } else {
        alert("Laiton siirto: ruutu on jo täytetty");
      }
    };
  }
  turncounter++;
}
