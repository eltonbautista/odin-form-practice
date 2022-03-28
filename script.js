/* eslint-disable no-console */
/* eslint-disable indent */

// eslint-disable-next-line no-unused-vars
const formValidationModulePattern = (function formValidationModulePattern() {
    const inputArray = document.querySelectorAll('.form-input-container input');
    const [
        emailInput,
        countryInput,
        zipCodeInput,
        passwordInput,
        passwordConfirmationInput,
    ] = inputArray;
    const errorSpans = document.querySelectorAll(
        '.form-input-container span.error'
    );
    const [
        emailErrorSpan,
        countryErrorSpan,
        zipCodeErrorSpan,
        passwordErrorSpan,
        passwordConfirmationErrorSpan,
    ] = errorSpans;
    const showErrorEmail = function showErrorEmail() {
        if (emailInput.validity.typeMismatch) {
            emailErrorSpan.textContent = 'Please input a proper email address.';
            // emailInput.reportValidity();
        } else if (emailInput.validity.valueMissing) {
            emailErrorSpan.textContent = 'Please enter an email address.';
        } else if (emailInput.validity.tooShort) {
            emailErrorSpan.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}`;
        }

        emailErrorSpan.className = 'error active';
    };

    const showErrorCountry = function showErrorCountry() {
        if (countryInput.validity.patternMismatch) {
            countryErrorSpan.textContent = 'Please do not enter any numbers.';
        } else if (countryInput.validity.valueMissing) {
            countryErrorSpan.textContent = 'Please enter a country.';
        } else if (countryInput.validity.tooShort) {
            countryErrorSpan.textContent = `Value needs to be at least ${countryInput.minLength} characters; currently it is ${countryInput.value.length}`;
        }
        countryErrorSpan.className = 'error active';
    };

    const showErrorZipCode = function showErrorZipCode() {
        if (zipCodeInput.validity.patternMismatch) {
            zipCodeErrorSpan.textContent =
                'Please enter a proper zip-code format';
        } else if (zipCodeInput.validity.tooShort) {
            zipCodeErrorSpan.textContent = `Zip-code should be more than ${zipCodeInput.minLength} characters; you entered ${zipCodeInput.value.length}`;
        } else if (zipCodeInput.validity.valueMissing) {
            zipCodeErrorSpan.textContent = 'Please enter a zip-code';
        }
        zipCodeErrorSpan.className = 'error active';
    };
    const showErrorPassword = function showErrorPassword() {
        if (passwordInput.validity.tooShort) {
            passwordErrorSpan.textContent = `Your password needs to be at least ${passwordInput.minLength} characters; currently it is ${passwordInput.value.length}`;
        } else if (passwordInput.validity.valueMissing) {
            passwordErrorSpan.textContent = `Please enter a password of at least ${passwordInput.minLength} characters`;
        }
        passwordErrorSpan.className = 'error active';
    };
    const showErrorPasswordConfirmation =
        function showErrorPasswordConfirmation() {
            if (passwordConfirmationInput.validity.tooShort) {
                passwordConfirmationErrorSpan.textContent = `Your password needs to be at least ${passwordInput.minLength} characters; currently it is ${passwordInput.value.length}`;
            } else if (passwordConfirmationInput.validity.valueMissing) {
                passwordConfirmationErrorSpan.textContent = `Please enter a password of at least ${passwordInput.minLength} characters`;
            }
            if (passwordConfirmationInput.value !== passwordInput.value) {
                passwordConfirmationErrorSpan.textContent =
                    'Please make sure your passwords match';
            }
            passwordConfirmationErrorSpan.className = 'error active';
        };

    // eslint-disable-next-line no-unused-vars
    const emailInputValidityCheck = (function emailInputValidityCheck() {
        emailInput.addEventListener('input', () => {
            if (emailInput.validity.valid) {
                emailErrorSpan.textContent = '';
                emailErrorSpan.className = 'error';
            } else {
                showErrorEmail();
            }
        });
    })();
    // eslint-disable-next-line no-unused-vars
    const countryInputValidityCheck = (function countryInputValidityCheck() {
        countryInput.addEventListener('input', () => {
            if (countryInput.validity.valid) {
                countryErrorSpan.textContent = '';
                countryErrorSpan.className = 'error';
            } else {
                showErrorCountry();
            }
        });
    })();
    // eslint-disable-next-line no-unused-vars
    const zipCodeInputValidityCheck = (function zipCodeInputValidityCheck() {
        zipCodeInput.addEventListener('input', () => {
            if (zipCodeInput.validity.valid) {
                zipCodeErrorSpan.textContent = '';
                zipCodeErrorSpan.className = 'error';
            } else {
                showErrorZipCode();
            }
        });
    })();
    // eslint-disable-next-line no-unused-vars
    const passwordInputValidityCheck = (function passwordInputValidityCheck() {
        passwordInput.addEventListener('input', () => {
            if (passwordInput.validity.valid) {
                passwordErrorSpan.textContent = '';
                passwordErrorSpan.className = 'error';
            } else {
                showErrorPassword();
            }
        });
    })();
    // eslint-disable-next-line no-unused-vars
    const passwordConfirmationInputValidityCheck =
        (function passwordConfirmationInputValidityCheck() {
            passwordConfirmationInput.addEventListener('input', () => {
                if (
                    passwordConfirmationInput.validity.valid &&
                    passwordConfirmationInput.value === passwordInput.value
                ) {
                    passwordConfirmationErrorSpan.textContent = '';
                    passwordConfirmationErrorSpan.className = 'error';
                } else {
                    showErrorPasswordConfirmation();
                }
            });
        })();
})();
