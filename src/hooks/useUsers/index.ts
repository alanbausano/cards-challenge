import { notification } from 'antd'
import { ApiError } from '../../types/types'
import { useQuery } from 'react-query'
import { getUsers } from './api'
import { QueryKeys } from '../../querKeys/queryKeysEnum'

export const useUsers = () => {
  const onError = (error: ApiError) => {
    notification.warning({
      message: error.response.data.error.message
    })
  }

  const { data } = useQuery([QueryKeys.Users], getUsers, {
    onError: () => onError
  })

  return {
    data
  }
}
