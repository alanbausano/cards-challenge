import { Typography } from 'antd'
import { FC } from 'react'
const { Link } = Typography

interface IProps {
  website?: string
}

export const WebsiteTypography: FC<IProps> = ({ website }) => {
  return (
    <Link
      href={website}
      target="_blank"
      style={{
        maxWidth: '300px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      {website}
    </Link>
  )
}
