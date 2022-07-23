import * as yup from 'yup';

export default yup.object({
  firstname: yup.string().required().min(2),
  lastname: yup.string().required().min(2),
  email: yup.string().required().email(),
  phone: yup.number().required(),
  role: yup.string().required().nullable(),
}).required();
