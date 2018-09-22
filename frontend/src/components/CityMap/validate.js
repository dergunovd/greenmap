const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Поле обязательно для заполнения';
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
