const { validationResult } = require("express-validator");

function validate(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formattedErrors = {}
    let errorMapped = errors.mapped()
    for (const property in errorMapped) {
      formattedErrors[property] =  errorMapped[property].msg
    }

    return res.status(422).json({
      message: "Silahkan cek kembali data yang diinput",
      errors: formattedErrors,
    });
  };
}

module.exports = validate