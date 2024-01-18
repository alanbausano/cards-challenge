import { Modal } from 'antd'
import { FC } from 'react'

interface IProps {
  open: boolean
  isEdit: boolean
}

export const AddEditModal: FC<IProps> = ({ open, isEdit }) => {
  return (
    <Modal title={isEdit ? 'Edit patient' : 'Add patient'} open={open}>
      <p>Form here</p>
    </Modal>
  )
}
