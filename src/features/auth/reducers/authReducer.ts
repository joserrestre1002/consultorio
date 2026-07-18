import { AuthActionType, type AuthAction } from '../models/AuthAction'
import type { AuthState } from '../models/AuthState'

export function authreducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      }

    case AuthActionType.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      }

    case AuthActionType.RESTORE_SESSION:
      if (!action.payload) {
        return {
          ...state,
          isAuthenticated: false,
          isLoading: false,
        }
      }
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      }

    case AuthActionType.LOGOUT:
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      }

    default:
      return state
  }
}
