const Calendar = document.querySelector('.datepicker');
M.Datepicker.init(Calendar,{
    i18n:{
        clear: 'effacer',
        done: 'choisir',
        cancel: 'annuler'
    },
    showClearBtn:true,
    format:'dd/mm/yyyy'
});

document.addEventListener('DOMContentLoaded', function() {  // run this only after page loads
    const counter = document.querySelectorAll("input#user,input#email,input#password");   // all input tags with id user
    M.CharacterCounter.init(counter);
});



// TESTING THE REGEX 
document.getElementById("first_name").addEventListener("keyup", check);
function check() {
  var val = document.getElementById("first_name").value;
  if(!val || !val.length) {
    return;
  }
  
  var regex = /[@.:;1-9]/gi;
  if(regex.test(val)) {
    document.getElementById("first_name").classList.remove("valid");
    document.getElementById("first_name").classList.add("invalid");
  } else {
    document.getElementById("first_name").classList.remove("invalid");
    document.getElementById("first_name").classList.add("valid");
  }
}



// const Counterletters = document.querySelector('input#input_text, textarea#textarea2');




// $(document).ready(function() {
//     $('input#input_text, textarea#textarea2').characterCounter();
//   });
        

// $(document).ready(function() {
   
//   });



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });
  
//   // Or with jQuery

//   $(document).ready(function(){
//     $('.datepicker').datepicker();
//   });


//   ----------------------

  
//   $(document).ready(function() {
//     $('input#input_text, textarea#textarea2').characterCounter();
//   });
        