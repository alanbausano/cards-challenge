import { Avatar, Card, CollapseProps, Skeleton, Typography } from 'antd'
import { Dispatch, SetStateAction, type FC } from 'react'
import { WebsiteTypography } from './Typography'
import { CollapseDescription } from './Collapse'
import { StyledWebsiteRow } from '../styles/styledComponents'
import { EditButton } from './Button'
import { UserPayload } from '../types/types'

interface IProps {
  name: string
  avatar: string
  description: string
  website: string
  id?: number
  isLoading: boolean
  setIsEdit: Dispatch<SetStateAction<boolean>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setInitialValues: Dispatch<SetStateAction<UserPayload>>
}

export const UserCard: FC<IProps> = ({
  id,
  name,
  avatar,
  description,
  website,
  isLoading,
  setIsEdit,
  setIsOpen,
  setInitialValues
}) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Description',
      children: <Typography>{description}</Typography>
    }
  ]

  const handleEdit = () => {
    setIsEdit(true)
    setIsOpen(true)
    setInitialValues({
      id,
      name,
      description,
      website
    })
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
