/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/apis/utils/axios';

interface LoginDataInterface {
  platformCode: string;
  authCode: string;
}

interface UserStateInterface {
  isLoggedIn: boolean;
  userName: string;
}

interface UserResponseInterface {
  name: string;
  accessToken: string;
  refreshToken: string;
}

const initialState: UserStateInterface = {
  isLoggedIn: false,
  userName: '',
};

export const login = createAsyncThunk('user/login', async (data: LoginDataInterface) => {
  const res = await api.post('/member/login', data);
  return res.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.userName = payload.name;
      window.localStorage.setItem('accessToken', payload.accessToken);
      document.cookie = `refreshToken=${payload.refreshToken}`;
    });
  },
});

export default userSlice.reducer;