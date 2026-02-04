/*
const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');

nameInput.addEventListener('input', function() {
    const name = nameInput.value;

    if (name.length >= 2) {
        nameInput.classList.remove('bad');
        nameInput.classList.add('good');
        message.textContent = " Good name!";
        message.style.color = "green";
    } else {
        nameInput.classList.remove('good');
        nameInput.classList.add('bad');
        message.textContent = "Name must be 2+ characters";
        message.style.color = "red"

    } 
});


const emailInput = document.getElementById('emailInput');


emailInput.addEventListener('input', function() {
    if (emailInput.value.includes('@')) {
        emailInput.style.borderColor = 'green';
    } else if () {
        emailInput.style.borderColor = 'red';
    }
});

*/


/*
// Get the elements
const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');

// Function to check if name is valid
function checkName() {
    const name = nameInput.value.trim();
   
    if (name.length === 0) {
        // Empty field - hide everything
        nameInput.classList.remove('valid', 'invalid');
        message.textContent = '';
        message.classList.add('hidden');
    } else if (name.length >= 2) {
        // Good name
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        message.textContent = "✓ Looks good!";
        message.classList.remove('hidden');
        message.className = "message good";
    } else {
        // Bad name (1 character)
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        message.textContent = "❌ Name must be 2+ characters";
        message.classList.remove('hidden');
        message.className = "message bad";
    }
}

// 1. Real-time typing validation
nameInput.addEventListener('input', function() {
    // Only show if user has typed something
    if (nameInput.value.trim().length > 0) {
        checkName();
    }
});

// 2. When user clicks outside (blur)
nameInput.addEventListener('blur', function() {
    checkName();
});

// 3. When user clicks inside (focus) - optional
nameInput.addEventListener('focus', function() {
    // Show validation only if there's already text
    if (nameInput.value.trim().length > 0) {
        checkName();
    }
});

*/



const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');
const emailInput = document.getElementById('emailInput');
const emailMessage = document.getElementById('emailMessage');
const space = document.getElementById('space');
const passwordInput = document.getElementById('passwordInput');
const messages = document.getElementById('messages');
const confirmInput = document.getElementById('confirmInput');
const confirmMessage = document.getElementById('confirmMessage');



/*---------- FOR NAME -----------*/
function checkName() {
    const name = nameInput.value.trim();

    if (name.length === 0) {
        nameInput.style.border = "";
        message.textContent = "";
        return;
    }

    if (name.length >= 2) {
        nameInput.style.border = "2px solid green";
        message.textContent =" ✓ Looks good!"
        message.style.color = "green";
    } else {
        nameInput.style.border = "2px solid red";
        message.textContent = "❌ Name must be 2+ characters";
        message.style.color = "red"
    }
}

nameInput.addEventListener('input', checkName);
nameInput.addEventListener('blur', checkName);

nameInput.addEventListener('input', function() {
    // Only show if user has typed something
    if (nameInput.value.trim().length > 0) {
        checkName();
    }
});

nameInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        emailInput.focus();
    }
});


/*------- fOR EMAIL VALIDATION ---------*/
function checkEmail() {
    const email = emailInput.value.trim();

    if (email.length === 0) {
        emailInput.style.border = "";
        emailMessage.textContent = "";
        space.style.margin = "";
        return;
    }

     if (emailInput.value.includes('@')) {
        emailInput.style.border = '2px solid green';
        emailMessage.textContent = "✓ Looks good!";
        emailMessage.style.color = "green";


    } else {
        emailInput.style.border = '2px solid red';
        emailMessage.textContent = "email must contain '@'";
        emailMessage.style.color = "red";
     
    }
}

emailInput.addEventListener('input', checkEmail);
emailInput.addEventListener('blur', checkEmail);

emailInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        passwordInput.focus();
    }
       
});



/*----------- FOR PASSWORD ----------*/
/*
function checkpassword() {
    const password = passwordInput.value;
   
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

   if (password.length) {
        passwordInput.style.border = "";
        messages.textContent = "";
        return;
 }

    if (password.length < 6) {
        passwordInput.style.border = "2px solid red"
        messages.textContent = "❌ password must be 6 letters and above";
         messages.style.color = "red";
         return;
    }

     if (!hasNumber && !hasSpecial ) {
         passwordInput.style.border = "2px solid red"
        messages.textContent ="❌ Needs special character (#@#$%..) AND a number (0-9)";
        messages.style.color = "red";
    } else if (!hasNumber) {
        passwordInput.style.border ="2px solid red";
        messages.textContent = "❌ Needs at least one number (0-9)";
        messages.style.color ="red";
    } else if (!hasSpecial) {
        passwordInput.style.border ="2px solid red";
        messages.textContent = "❌ Needs at least one special character (!@%$&*#...";
        messages.style.color ="red";
    } else {

    if (password.length < 8) {
        passwordInput.style.border = "2px solid orange";
        messages.textContent = "Medium - Try 8+ characters for better security"
        messages.style.color = "orange";

    } else if (password.length >= 8 && password.length < 12) {
        passwordInput.style.border = "2px solid #28a745";
        messages.textContent = "✓ Good Password ";
        messages.style.color = "#28a745";
    } else {
        passwordInput.style.border = "2px solid #006400";
        messages.textContent = "✓ Strong Password";
        messages.style.color = "#006400";
    }
    
   if (confirmInput && confirmInput.value.length > 0) {
    checkConfirm(); 
}
}
}
*/


function checkpassword() {
    const password = passwordInput.value;
   
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (password.length === 0) {
        passwordInput.style.border = "";
        messages.textContent = "";
        return;
    }

    if (password.length >= 6) {
        passwordInput.style.border = "2px solid green"
         messages.style.color = "green";

      

    
    if (confirmInput.value.length > 0) checkConfirm();

    

     if (hasSpecial && hasNumber ) {
         passwordInput.style.border = "2px solid green"
        messages.textContent ="✓ Strong password";
        messages.style.color = "green";
    } 
   
    else if (!hasNumber) {
        passwordInput.style.border ="2px solid red";
        messages.textContent = "❌ Needs at least one number (0-9)";
        messages.style.color ="red";
    } else if (!hasSpecial) {
        passwordInput.style.border ="2px solid red";
        messages.textContent = "❌ Needs at least one special character (!@%$&*#...)";
        messages.style.color ="red";
    } 
   
    } 
    
    else {
        passwordInput.style.border = "2px solid red";
        messages.textContent = "❌ password must be 6 letters and above";
        messages.style.color = "red";
    }   
   
}

const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function() {

    if (passwordInput.type && confirmInput.type === 'password') {
        passwordInput.type = 'text';
        confirmInput.type = 'text';
        toggleButton.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        confirmInput.type = 'password';
        toggleButton.textContent = '👁️';
    }
});



/*
passwordInput.addEventListener('keyup', function() {
    const strength = checkPasswordStrength(this.value);
});

function checkPasswordStrength(password) {
    if (password.length === 0) return 'Empty';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        return 'Strong';
    }

    return 'Good';
}
*/



  

passwordInput.addEventListener('input',checkpassword);
passwordInput.addEventListener('blur', checkpassword);

passwordInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        confirmInputInput.focus();
    }
});


/*------- FOR CONFIRM PASSWORD -------*/
function checkConfirm() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;



    if (confirm.length === 0) {
        confirmInput.style.border = "";
        confirmMessage.textContent = "";
        return;
    }

    if (password === confirm && password.length >= 6) {
        confirmInput.style.border = "2px solid green";
        confirmMessage.textContent ="✓ Password match!";
        confirmMessage.style.color = "green";

    } else if (password.length < 6) {
        confirmInput.style.border = "2px solid red";
        confirmMessage.textContent = " Password too short first";
        confirmMessage.style.color = "red";

    } else {
        confirmInput.style.border = "2px solid red";
        confirmMessage.textContent = "❌ password don't match";
        confirmMessage.style.color = "red";
    }
}

confirmInput.addEventListener('input',checkConfirm);
confirmInput.addEventListener('blur', checkConfirm);








/*----- this makes the cursor go input by input when enter is been clicked ----*/
const fields = [nameInput, emailInput, passwordInput, cPasswordInput];

fields.forEach((field, index) => {
cPasswordInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();

       const nextIndex = (index + 1) % fields.length;
       fields[nextIndex].focus();
    }
    });
});

