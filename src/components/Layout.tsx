import { useUsers } from '../hooks/useUsers'
import { UserCard } from './UserCard'
import { StyledCol, StyledRow } from '../styles/styledComponents'
import { StickyButton } from './StickyButton'
import { Row } from 'antd'
import { AddEditModal } from './AddEditModal'
import { useState } from 'react'
import { UserPayload } from '../types/types'

const INITIAL_VALUES = { id: 0, name: '', description: '', website: '' }

export const Layout = () => {
  const { users, isFetching } = useUsers()
  const [initialValues, setInitialValues] = useState<UserPayload>(INITIAL_VALUES)
  const [open, setOpen] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <>
      {!isFetching ? (
        <Row justify={'center'}>
          <StickyButton
            setInitialValues={setInitialValues}
            setIsOpen={setOpen}
            setIsEdit={setIsEdit}
          />
        </Row>
      ) : null}
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
              setIsOpen={setOpen}
              setIsEdit={setIsEdit}
              setInitialValues={setInitialValues}
            />
          </StyledCol>
        ))}
      </StyledRow>
      <AddEditModal
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        setIsOpen={setOpen}
        setIsEdit={setIsEdit}
        open={open}
        isEdit={isEdit}
      />
    </>
  )
}
