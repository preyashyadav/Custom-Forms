//toggle view

function myText() {
    var x = document.getElementById("text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }

  function myTextArea(){

    var x = document.getElementById("textArea");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

}

function myCheckBox(){
    var x = document.getElementById("checkBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}





// // eanble disable input field
// function EnableDisableTextBox(btnPassport) {
//     var txtPassportNumber = document.getElementById("txtPassportNumber");
//     if (btnPassport.value == "Short Answer") {
//         txt.removeAttribute("disabled");
//     } 
//     else if (btnPassport.value == "Paragraph") {
//         txtArea.removeAttribute("disabled");
//     }
//     else if (btnPassport.value == "Check Box") {
//         checkBox.removeAttribute("disabled");
//     }
//     else {
//         txt.setAttribute("disabled", "disabled");
//         txtArea.setAttribute("disabled", "disabled");
//         checkBox.setAttribute("disabled", "disabled");
//     }
// }
