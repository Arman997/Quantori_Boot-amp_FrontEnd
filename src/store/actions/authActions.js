import axios from 'axios';
import { Dispatch } from 'redux';
import { loginSuccess, userLoaded, loginFail } from '../reducers/authReducers';

export const login = (email, password) => async (dispatch) => {
  try {
    const login_url = import.meta.env.VITE_IP + 'api/auth/login'
    const res = await axios.post(login_url, { email, password });
    const token = res.data.token;

    console.log('Login successful, token:', token);

    dispatch(loginSuccess(token));

    const login_token_url = import.meta.env.VITE_IP + 'api/auth/user'
    const userRes = await axios.get(login_token_url, {
      headers: { 'x-auth-token': token },
    });

    console.log('User data loaded:', userRes.data);

    dispatch(userLoaded(userRes.data));
  } catch (err) {
    console.log('Login failed:', err);
    dispatch(loginFail());
  }
};