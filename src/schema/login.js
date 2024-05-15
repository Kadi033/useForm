import * as Yup from "yup"
const loginSchema = Yup.object().shape({
    email: Yup.string().trim().email().required(),
    password: Yup.string().min(8).trim().required(),
})

export default loginSchema