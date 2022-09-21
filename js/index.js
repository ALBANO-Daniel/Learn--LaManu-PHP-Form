const Calendar = document.querySelector('.datepicker');

// document.addEventListener('DOMContentLoaded', function() {
//   const Calendar = document.querySelector('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// const now = new Date;
// const now2 = Number(now.getFullYear());
// const now2 = new Date;
// const now = Date.parse();
// console.log(now2)


M.Datepicker.init(Calendar,{
      i18n:{   // French setup
        clear: 'effacer',
        done: 'choisir',
        cancel: 'annuler',
        months: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
      },
      yearRange: [1910,2022],
      showMonthAfterYear: true,
      // yearRange: 200,
      // minDate: '-1893456000000',
      // maxDate: 'Wed Sep 21 2022 15:32:29 GMT+0200 (Central European Summer Time)',
      // maxDate: Date,   // Date
      // coverTrigger: false,
      // onCloseEnd: false,  8898 - materialize.js 
      showClearBtn:true,
      format:'dd/mm/yyyy'
});




    // console.log(Calendar);
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

// js for the preview image upload 
uploadedProfileImg.onchange = evt => {
    const [file] = uploadedProfileImg.files
    if (file) {
      showProfileImg.src = URL.createObjectURL(file)
    }
  }