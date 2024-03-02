let password = document.querySelector('input[name=userPass]');
const passwordConfirm = document.querySelector('input[name="userPassConfirmation"]');
console.log(passwordConfirm);
let passwordError = document.getElementById('password-error');

passwordConfirm.addEventListener('input', () => {
    if (password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity('');
        passwordError.textContent = ''; // Clear error message
    } else { 
        passwordConfirm.setCustomValidity('Passwords do not match');
        passwordError.textContent = '*Passwords do not match'; // Set error message
    }
});

// Add event listener to clear error message when password field changes
password.addEventListener('input', function () {
    passwordConfirm.setCustomValidity('');
    passwordError.textContent = ''; // Clear error message
});
