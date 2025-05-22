export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (formData, formType) => {
  const errors = {};

  switch (formType) {
    case "login":
      if (!validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!formData.password) {
        errors.password = "Password is required";
      }
      break;

    case "register":
      if (!validateName(formData.name)) {
        errors.name = "Name must be at least 2 characters long";
      }
      if (!validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!validatePassword(formData.password)) {
        errors.password =
          "Password must be at least 8 characters with uppercase, lowercase and number";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      break;

    case "payment":
      if (!validatePhoneNumber(formData.phone)) {
        errors.phone = "Please enter a valid 10-digit phone number";
      }
      break;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
