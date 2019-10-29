const { check } = require('express-validator')

exports.inserir = [
  check('date').custom(isValidDate).withMessage('A Data está invalida!')
]



