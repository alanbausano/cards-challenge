import { FC } from 'react'
import { StyledLink } from '../styles/styledComponents'

interface IProps {
  website?: string
}

export const WebsiteTypography: FC<IProps> = ({ website }) => {
  return (
    <StyledLink href={website} target="_blank">
      {website}
    </StyledLink>
  )
}
