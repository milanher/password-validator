const password = async ({ Password, minLength, maxLength, specialCharacter, upperCase, lowerCase}, customRegex) => {
    const checkPassword = (password) => {
        isValid = true
        if (minLength || maxLength) {
            const maxlengthvalid = password.length <= maxLength ? true : false
            const minlengthvalid = password.length >= minLength ? true : false
            if (!(minlengthvalid && maxlengthvalid)) {
                isValid = false
            }
        }
        if (specialCharacter) {
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
        if (customRegex) {
            const regex = customRegex
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