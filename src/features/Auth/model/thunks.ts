import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveTokenToLocalStorage, removeTokenFromLocalStorage } from '../../../shared/lib/localStorage';
// import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';
import { clearCurrentUser } from '../../../entities/User/model/slice';
import { getProfile } from '../../../entities/User/model/thunks';
import { API_BASE_URL } from '../../../shared/configs/api';
import { ServerErrors } from '../../../shared/types/serverTypes';

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errors = await response.json();
        throw new Error((errors as ServerErrors).errors.map((error) => `${error.name}:\t${error.message}`).join('\n'));
      }
      const data = await response.json();

      saveTokenToLocalStorage(data.token);

      const profile = await thunkAPI.dispatch(getProfile()); //.unwrap();// thunkAPI.dispatch(setCurrentUser(data.user));
      if (getProfile.rejected.match(profile)) {
        throw new Error(profile.payload as string);
      }

      return { token: data.token, profile };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (newUser: { password: string; email: string; commandId: string }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errors = await response.json();
        throw new Error((errors as ServerErrors).errors.map((error) => `${error.name}:\t${error.message}`).join('\n'));
      }
      const data = await response.json();

      saveTokenToLocalStorage(data.token);

      const profile = await thunkAPI.dispatch(getProfile()).unwrap(); // thunkAPI.dispatch(setCurrentUser(data.user));
      if (getProfile.rejected.match(profile)) {
        throw new Error(profile.payload as string);
      }

      return { token: data.token, profile };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const signout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    removeTokenFromLocalStorage();
    thunkAPI.dispatch(clearCurrentUser());

    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
