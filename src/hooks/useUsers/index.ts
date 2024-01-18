import { notification } from 'antd'
import { ApiError, User } from '../../types/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUsers, editUser, postUser } from './api'
import { QueryKeys } from '../../querKeys/queryKeysEnum'

export const useUsers = () => {
  const queryClient = useQueryClient()
  const onError = (error: ApiError) => {
    notification.warning({
      message: error.response.data.error.message
    })
  }

  const onUpdateSuccess = () => {
    notification.success({ message: 'User updated successfully' })
  }

  const onPostSuccess = () => {
    notification.success({ message: 'User created successfully' })
  }

  const { data, isFetching } = useQuery([QueryKeys.Users], getUsers, {
    onError
  })

  const { mutate: updatePatient } = useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.Users])
      onUpdateSuccess()
    },
    onError
  })

  const { mutate: postPatient } = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.Users])
      onPostSuccess()
    },
    onError
  })

  const users = data?.map((data: User) => data)

  return {
    users,
    isFetching,
    updatePatient,
    postPatient
  }
}
