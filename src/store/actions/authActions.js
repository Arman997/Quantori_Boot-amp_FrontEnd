import axios from 'axios';
import { getTokenAPI, getUserAPI } from '../apiurl/url';
import { loginSuccess, userLoaded, loginFail } from '../reducers/authReducers';

export const login = (username, password) => async (dispatch) => {
  try {
    const cred = {    
    username: username,
    password: password ,
    expiresInMins: 30, 
    }
    const res = await axios.post(getTokenAPI, { username, password });
    const token = res.data.token;


    dispatch(loginSuccess(token));


    const userRes = await axios.get(getUserAPI, {
      headers: { 
          'Authorization': 'Bearer ' + token,
      }
    });

    

    dispatch(userLoaded(userRes.data));
  } catch (err) {
    console.log('Login failed:', err);
    dispatch(loginFail());
  }
};