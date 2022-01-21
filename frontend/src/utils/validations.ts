export const validateEmail = (mail: string): boolean => {
  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(mail);
};

export const validatePassword = (password: string): boolean => {
  let regex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
  return regex.test(password);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  let regex = new RegExp(/^\d{11}$/);
  return regex.test(phoneNumber);
};
