const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Поле обязательно для заполнения';
  }
  if (!values.type) {
    errors.type = 'Поле обязательно для заполнения';
  }
  if (!values.description) {
    errors.description = 'Поле обязательно для заполнения';
  }

  return errors;
};

export default validate;
