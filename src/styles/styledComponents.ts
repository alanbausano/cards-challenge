import { Col, Collapse, Row } from 'antd'
import Link from 'antd/es/typography/Link'
import styled from 'styled-components'

export const StyledWebsiteRow = styled(Row)`
  max-width: 300px;
`
export const StyledRow = styled(Row)`
  margin: 10px;
`

export const StyledCol = styled(Col)`
  width: 30px;
  margin: 4px;
`
export const StyledCollapse = styled(Collapse)`
  margin-top: 20px;
`
export const StyledLink = styled(Link)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
