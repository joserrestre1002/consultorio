import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authreducer } from '../reducers/authReducer'
import { initialAuthState } from '../models/AuthState'
import { AuthActionType } from '../models/AuthAction'
import { AuthService } from '../services/AuthService'

interface AuthProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispath] = useReducer(authreducer, initialAuthState)

  useEffect(() => {
    async function restoreSession() {
      const session = await AuthService.restoreSession()

      if (!session) {
        dispath({
          type: AuthActionType.LOGIN_FAILURE,
        })

        return
      }

      dispath({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: session,
      })
    }

    restoreSession()
  }, [])

  async function handleLogin() {
    dispath({
      type: AuthActionType.LOGIN_REQUEST,
    })

    try {
      const session = await AuthService.login()

      dispath({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: session,
      })
    } catch {
      dispath({
        type: AuthActionType.LOGIN_FAILURE,
      })
    }
  }

  async function handleLogout() {
    await AuthService.logout()
    dispath({
      type: AuthActionType.LOGOUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,

        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
