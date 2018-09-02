const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Поле обязательно для заполнения';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Некорректный email';
  }
  if (!values.name) {
    errors.name = 'Поле обязательно для заполнения';
  }
  if (!values.lastname) {
    errors.lastname = 'Поле обязательно для заполнения';
  }
  if (!values.password) {
    errors.password = 'Поле обязательно для заполнения';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать минимум 6 символов';
  }
  if (!values.rePassword) {
    errors.rePassword = 'Поле обязательно для заполнения';
  } else if (values.password !== values.rePassword) {
    errors.password = 'Пароли не совпадают';
    errors.rePassword = 'Пароли не совпадают';
  }

  return errors;
};

export default validate;
