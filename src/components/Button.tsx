import { Button } from 'antd'
import { FC } from 'react'

interface IProps {
  onClick: () => void
}

export const EditButton: FC<IProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Edit</Button>
}
