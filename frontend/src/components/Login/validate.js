const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Поле обязательно для заполнения';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Некорректный email';
  }
  if (!values.password) {
    errors.password = 'Поле обязательно для заполнения';
  }

  return errors;
};

export default validate;
