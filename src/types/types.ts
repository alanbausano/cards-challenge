export type UsersResponse = {
  createdAt: string
  name: string
  avatar: string
  description: string
  website: string
  id: number
}

export interface ApiError {
  response: {
    data: {
      error: {
        message: string
      }
    }
  }
}
