export const API_BASE_URL = "https://api.sanskritsikshanam.com";

export const COURSE_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
};

export const QUIZ_TYPES = {
  CHAPTER: "chapter",
  COURSE: "course",
  ASSESSMENT: "assessment",
};

export const PAYMENT_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR:
    "Network connection error. Please check your internet connection.",
  AUTH_ERROR: "Authentication failed. Please login again.",
  PAYMENT_ERROR: "Payment processing failed. Please try again.",
  GENERAL_ERROR: "Something went wrong. Please try again later.",
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  REGISTER_SUCCESS: "Registration successful!",
  ENROLL_SUCCESS: "Successfully enrolled in the course!",
  PAYMENT_SUCCESS: "Payment processed successfully!",
};

export const STORAGE_KEYS = {
  USER_TOKEN: "userToken",
  USER_PROFILE: "userProfile",
  COURSE_PROGRESS: "courseProgress",
};
