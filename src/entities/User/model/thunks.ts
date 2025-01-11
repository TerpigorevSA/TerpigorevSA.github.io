import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';
import { getTokenFromLocalStorage } from '../../../shared/lib/localStorage';
import { setCurrentUser, updateCurrentUser } from './slice';
import { API_BASE_URL } from '../../../shared/configs/api';

export const getProfile = createAsyncThunk('user/getProfile', async (_, thunkAPI) => {
  const token = getTokenFromLocalStorage();
  if (!token) throw new Error('No token');

  try {
    const response = await fetch(`${API_BASE_URL}/api/profile`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error(`${response.status} - ${await response.json()}`);
    const data = await response.json();

    thunkAPI.dispatch(setCurrentUser(data));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const updateProfile = createAsyncThunk('user/updateProfile', async (user: { name: string }, thunkAPI) => {
  const token = getTokenFromLocalStorage();
  if (!token) throw new Error('No token');

  try {
    const response = await fetch(`${API_BASE_URL}/api/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error('Update profile failed');
    const data = await response.json();

    thunkAPI.dispatch(updateCurrentUser(data));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const changePassword = createAsyncThunk(
  'user/chngePassword',
  async (user: { password: string; newPassword: string }, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch(`${API_BASE_URL}/api/profile/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error('Change password failed');
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
