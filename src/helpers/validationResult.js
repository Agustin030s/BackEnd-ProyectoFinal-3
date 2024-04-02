import { validationResult } from "express-validator";

const validationResult = (req, res, next) => {
  const allErrors = validationResult(req);
  if (!allErrors.isEmpty()) {
    return res.status(400).json({ errors: allErrors.array() });
  }
  next();
};

export default validationResult;
