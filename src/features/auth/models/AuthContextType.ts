import type { User } from './User'
export interface AuthContextType {
  user: User | null
  accessToken: string | null
  refreshToken: string | null

  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => void
}
