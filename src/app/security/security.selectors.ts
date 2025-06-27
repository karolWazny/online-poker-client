import { createSelector } from '@ngrx/store';
import {AppState} from '../store/app.state';

export const selectIsLoggedIn = createSelector(
  (state: AppState) => state.login,
  (state) => {
    console.log(state.token, state.error, state.isLoading)
    return !!(state.token && !state.error && !state.isLoading)
  }
)

export const selectUsername = createSelector(
  (state: AppState) => state.login,
  (state) => state.username
)

export const selectToken = createSelector(
  (state: AppState)=> state.login,
  (loginState) => loginState.token
)
