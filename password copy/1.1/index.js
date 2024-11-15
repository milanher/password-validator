const password = async ({ Password, digits, minLength, maxLength, specialCharacter, upperCase, lowerCase, SpecifiedChar, customRegex }) => {
    const checkPassword = (password) => {
        isValid = true
        if (minLength || maxLength) {
            const maxlengthvalid = password.length <= maxLength ? true : false
            const minlengthvalid = password.length >= minLength ? true : false
            if (!(minlengthvalid && maxlengthvalid)) {
                isValid = false
            }
        }
        if (!specialCharacter && SpecifiedChar) {
            throw new Error("You cant check for special digits without checking the special characters checkmark");
        }
        if (specialCharacter && SpecifiedChar) {
            const specialCharRegex = new RegExp(`[${SpecifiedChar}]`);
            if (!specialCharRegex.test(password)) {
                isValid = false
            };
        }
        if (specialCharacter && !SpecifiedChar) {
            const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
            if (!specialCharRegex.test(password)) {
                isValid = false
            };
        }
        if (lowerCase) {
            const hasLower = [...password].some(char => char === char.toLowerCase() && char !== char.toUpperCase());
            if (!hasLower) {
                isValid = false
            }
        }
        if (upperCase) {
            const hasUpper = [...password].some(char => char === char.toUpperCase() && char !== char.toLowerCase());
            if (!hasUpper) {
                isValid = false
            }
        }
        if (digits) {
            const hasDigits = (str) => /\d/.test(str);
            const check = hasDigits(password)
            if (!check) {
                isValid = false
            }
        }

        if (customRegex) {
            const regex = new RegExp(customRegex)
            if (!regex.test(password)) {
                isValid = false
            }
        }

        return {
            isValid
        }
    }
    return {
        result: checkPassword(Password)
    }
}

export default password;