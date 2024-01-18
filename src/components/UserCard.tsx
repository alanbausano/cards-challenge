import { Avatar, Card, CollapseProps, Skeleton, Typography } from 'antd'
import { type FC } from 'react'
import { WebsiteTypography } from './Typography'
import { CollapseDescription } from './Collapse'
import { StyledWebsiteRow } from '../styles/styledComponents'
import { EditButton } from './Button'

interface IProps {
  name: string
  avatar: string
  description: string
  website: string
  id: number
  isLoading: boolean
}

export const UserCard: FC<IProps> = ({ name, avatar, description, website, isLoading }) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Description',
      children: <Typography>{description}</Typography>
    }
  ]

  const handleEdit = () => {
    console.log('edit')
  }

  return (
    <Skeleton loading={isLoading}>
      <Card
        title={
          <>
            <Avatar style={{ marginRight: '10px' }} src={avatar} /> <>{name}</>
          </>
        }
        extra={<EditButton onClick={handleEdit} />}
      >
        <StyledWebsiteRow>
          <WebsiteTypography website={website} />
        </StyledWebsiteRow>
        <CollapseDescription items={items} />
      </Card>
    </Skeleton>
  )
}
