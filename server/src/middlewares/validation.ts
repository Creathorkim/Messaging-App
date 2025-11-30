import { body } from "express-validator";

export const signUpValidation = () => [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail(),

  body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

export const loginValidation = () => [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please enter your email.")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .normalizeEmail(),

  body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6 })
    .withMessage("Password must be at lease 6 characters long."),
];
