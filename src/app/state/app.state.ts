import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from 'src/app/models/auth.state';
import { AuthReducer } from './reducers/auth.reducer';

export interface AppState {
    auth: AuthState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: AuthReducer
}