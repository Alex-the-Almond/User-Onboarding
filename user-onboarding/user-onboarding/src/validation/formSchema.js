import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be a minimum of 3 characters.'),
    email: yup
    .string()
    .email('Must be a valid email.')
    .required('Email is required'),
    password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be a minimum of 8 characters.'),
    tos: yup
    .boolean()
    
})

export default formSchema