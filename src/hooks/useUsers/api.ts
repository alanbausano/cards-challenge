import axios from 'axios'
import { User, UsersResponse } from '../../types/types'

export const getUsers = async () => {
  const response = await axios.get<UsersResponse[]>(import.meta.env.VITE_API_URL)

  return response.data
}

export const editUser = async ({ id, description }: { id: number; description: string }) => {
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, {
    description
  })

  return response.data
}

export const postUser = async (user: User) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}`, {
    user
  })

  return response.data
}
