import { notification } from 'antd'
import { ApiError, User } from '../../types/types'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUsers, editUser } from './api'
import { QueryKeys } from '../../querKeys/queryKeysEnum'

export const useUsers = () => {
  const queryClient = useQueryClient()
  const onError = (error: ApiError) => {
    notification.warning({
      message: error.response.data.error.message
    })
  }

  const { data, isFetching } = useQuery([QueryKeys.Users], getUsers, {
    onError: () => onError
  })

  const { mutate } = useMutation(editUser, {
    onSuccess: () => queryClient.invalidateQueries([QueryKeys.Users])
  })

  const users = data?.map((data: User) => data)

  return {
    users,
    isFetching,
    postNewPatient: mutate
  }
}
