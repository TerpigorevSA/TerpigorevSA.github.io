import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../../shared/configs/api';
import { CategoriesFilters, Category, GetPageResult, ServerErrors } from '../../../shared/types/serverTypes';
import { getTokenFromLocalStorage } from '../../../shared/lib/localStorage';
import { getLocaleErrorMessage } from '../../../shared/lib/errorsParsing';
import { stringifyObject } from '../../../shared/lib/stringifyObjectHelper';

export const getCategories = createAsyncThunk<GetPageResult<Category>, CategoriesFilters>(
  'products/getCategories',
  async (filters: CategoriesFilters, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/categories${
          !filters ? '' : `?${new URLSearchParams(stringifyObject(filters)).toString()}`
        }`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        const errors = await response.json();
        const errorMessages = (errors as ServerErrors).errors.map((error) => getLocaleErrorMessage(error));
        return thunkAPI.rejectWithValue(errorMessages);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
