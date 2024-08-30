export const checkValidateData = (email, pass) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    if (!isEmailValid) return "Email is Not Valid";
    if (!isPassValid) return "Password is not Valid";
    return null;

}