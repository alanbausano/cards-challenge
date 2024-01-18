import { CollapseProps } from 'antd'
import { FC } from 'react'
import { StyledCollapse } from '../styles/styledComponents'

interface IProps {
  items: CollapseProps['items']
}

export const CollapseDescription: FC<IProps> = ({ items }) => {
  return <StyledCollapse items={items} />
}
