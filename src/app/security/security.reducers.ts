import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './security.actions';

export interface LoginState {
  username: string | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: LoginState = {
  username: 'Guest',
  token: null,
  error: null,
  isLoading: false
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token, username }) => ({ ...state, username: username, token: token, isLoading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);
