import type { User } from './User'

export const AuthActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  RESTORE_SESSION: 'RESTORE_SESSION',
  LOGOUT: 'LOGOUT',
} as const

export type AuthAction =
  | {
      type: typeof AuthActionType.LOGIN_REQUEST
    }
  | {
      type: typeof AuthActionType.LOGIN_SUCCESS
      payload: {
        user: User
        accessToken: string
        refreshToken: string
      }
    }
  | {
      type: typeof AuthActionType.LOGIN_FAILURE
    }
  | {
      type: typeof AuthActionType.RESTORE_SESSION
      payload: {
        user: User
        accessToken: string
        refreshToken: string
      } | null
    }
  | {
      type: typeof AuthActionType.LOGOUT
    }
