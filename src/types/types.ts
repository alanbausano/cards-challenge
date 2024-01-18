export type UsersResponse = {
  createdAt: string
  name: string
  avatar: string
  description: string
  website: string
  id?: number
}

export type User = Omit<UsersResponse, 'createdAt'>

export type UserPayload = Omit<UsersResponse, 'createdAt' | 'avatar'>

export interface ApiError {
  response: {
    data: {
      error: {
        message: string
      }
    }
  }
}
