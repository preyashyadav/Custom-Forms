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



$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
    e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="input-group mb-3"><input placeholder="Enter Price" type="text" name="mytext[]" class="form-control"><div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
        })
    });

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
