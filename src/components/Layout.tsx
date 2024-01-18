import { useUsers } from '../hooks/useUsers'
import { UserCard } from './UserCard'
import { StyledCol, StyledRow } from '../styles/styledComponents'
import { StickyButton } from './StickyButton'
import { Row } from 'antd'

export const Layout = () => {
  const { users, isFetching } = useUsers()

  return (
    <>
      <Row justify={'center'}>
        <StickyButton />
      </Row>
      <StyledRow justify="space-around">
        {users?.map(user => (
          <StyledCol key={user?.id} lg={7} xs={24}>
            <UserCard
              isLoading={isFetching}
              id={user?.id}
              name={user?.name}
              description={user?.description}
              avatar={user?.avatar}
              website={user?.website}
            />
          </StyledCol>
        ))}
      </StyledRow>
    </>
  )
}
