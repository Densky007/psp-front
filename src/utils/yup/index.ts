import * as yup from 'yup'

export const LoginScheme = yup.object().shape({
  email: yup.string().email('Введите ваш email').required(),
  password: yup.string().min(6, 'Пароль должен быть минимум из 6 символов').required()
})