import type { AuthSession } from '../models/AuthSession'

export const AuthService = {
  async login(): Promise<AuthSession> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      user: {
        id: 1,
        fullName: 'jose montoya',
        email: 'jmontoya@test.com',
      },
      accessToken: 'ACCESS_TOKEN',
      refreshToken: 'REFRESH_TOKEN',
    }
  },

  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 300))
  },

  async restoreSession(): Promise<AuthSession | null> {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return null
  },
}
