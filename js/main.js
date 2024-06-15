 // confirmation part
 const button = document.querySelector('#create');
 const canvas = document.querySelector('#confetii');
 const jsConfetti = new JSConfetti();
 let flagNeed = false
async function myFunction(){
     if (flagNeed) {
         document.getElementById("limiter").style.display = 'none';
         document.getElementById('create').innerHTML = 'Created!';
         jsConfetti.addConfetti();
     }
     else{
         document.getElementById('text_label').innerHTML = 'Check your password!';
     }
}
//------------------------------------------------------------------------

 //-------------------------------------------------------------------------
//  //alert part
// (function ($){
//     "use strict";
//      /*==================================================================
//     // [ Focus input ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//                 console.log("hello")
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })
//     })
//
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');
//
//     $('.validate-form').on('submit',function(){
//         var check = true;
//
//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }
//         return check;
//     });
//
//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });
//
//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }
//
//     function showValidate(input) {
//         var thisAlert = $(input).parent();
//
//         $(thisAlert).addClass('alert-validate');
//     }
//     function hideValidate(input) {
//         var thisAlert = $(input).parent();
//
//         $(thisAlert).removeClass('alert-validate');
//     }
// })(jQuery);
//-------------------------------------------------------------------------

 //------------------------------------------------------------------------
 // password check
 const passwordInput = document.querySelector(".pass-field input");
 const eyeIcon = document.querySelector(".pass-field i");
 const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    let needs = 0
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            console.log(requirementItem.firstElementChild)
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            needs += 1;
            console.log(needs)
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
        if (needs == 5) {
            flagNeed = true
        }
        console.log(flagNeed)
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
//-------------------------------------------------------------------------------------------
