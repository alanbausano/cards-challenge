import axios from 'axios'
import { UsersResponse } from '../../types/types'

export const getUsers = async () => {
  const response = await axios.get<UsersResponse>(import.meta.env.VITE_API_URL)

  return response.data
}
