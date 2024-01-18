import { PlusOutlined } from '@ant-design/icons'
import { Affix, Button } from 'antd'
import { Dispatch, FC, SetStateAction } from 'react'
import { UserPayload } from '../types/types'

interface IProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setInitialValues: Dispatch<SetStateAction<UserPayload>>
}

export const StickyButton: FC<IProps> = ({ setIsEdit, setIsOpen, setInitialValues }) => {
  const handleClick = () => {
    setIsEdit(false)
    setIsOpen(true)
    setInitialValues({ name: '', description: '', website: '' })
  }

  return (
    <Affix>
      <Button onClick={handleClick} style={{ margin: '10px' }} size="large" type="primary">
        <PlusOutlined /> Add Patient
      </Button>
    </Affix>
  )
}
