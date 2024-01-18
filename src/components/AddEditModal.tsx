import { Form, Input, Modal } from 'antd'
import { Dispatch, FC, SetStateAction, useCallback, useEffect } from 'react'
import { useUsers } from '../hooks/useUsers'
import { User, UserPayload } from '../types/types'

interface IProps {
  open: boolean
  isEdit: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
  initialValues: UserPayload
  setInitialValues: Dispatch<SetStateAction<UserPayload>>
}

export const AddEditModal: FC<IProps> = ({
  open,
  isEdit,
  setIsEdit,
  setIsOpen,
  initialValues,
  setInitialValues
}) => {
  const [form] = Form.useForm()
  const { updatePatient, postPatient } = useUsers()

  useEffect(() => {
    form.setFieldValue('id', initialValues.id)
    form.setFieldValue('name', initialValues.name)
    form.setFieldValue('description', initialValues.description)
    form.setFieldValue('website', initialValues.website)
  }, [initialValues, form])

  const handleSubmit = () => {
    form.submit()
  }

  const handleCancel = () => {
    setInitialValues({ id: 0, name: '', description: '', website: '' })
    setIsOpen(false)
    setIsEdit(false)
  }

  const handleFinish = useCallback(
    (form: User) => {
      isEdit ? updatePatient({ ...form, id: initialValues.id as number }) : postPatient(form)
      setIsOpen(false)
    },
    [isEdit]
  )

  return (
    <Modal
      title={isEdit ? 'Edit patient' : 'Add patient'}
      open={open}
      onOk={handleSubmit}
      onCancel={handleCancel}
      closable={false}
      maskClosable={false}
      destroyOnClose
    >
      <Form
        form={form}
        labelCol={{ span: 5 }}
        style={{ marginTop: '20px' }}
        onFinish={form => handleFinish(form)}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
