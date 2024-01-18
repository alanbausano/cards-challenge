import * as Yup from 'yup'

export const validationSchema = Yup.object({
  id: Yup.number().required('Id is required'),
  name: Yup.string().optional(),
  description: Yup.string().optional(),
  website: Yup.string().optional()
})
