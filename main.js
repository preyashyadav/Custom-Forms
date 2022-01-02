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

/////// adding html input fields on button click


function add(){
    var new_chq_no = parseInt($('#total_chq').val())+1;
    var new_input="<input type='text' id='new_"+new_chq_no+"'>";
    $('#new_chq').append(new_input);
    $('#total_chq').val(new_chq_no)
  }
function remove(){
    var last_chq_no = $('#total_chq').val();
    if(last_chq_no>1){
      $('#new_'+last_chq_no).remove();
      $('#total_chq').val(last_chq_no-1);
    }
  }

// //////////////////////////////




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
