import Router from 'next/router';
import { reauthenticate } from '../store/actions/index';
import { getCookie } from './cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  // is server
  if (ctx.req) {
    if (ctx.req.headers.cookie) {
      ctx.reduxStore.dispatch(reauthenticate(getCookie('token', ctx.req)));
    }
  } else {
    console.log(ctx.reduxStore.getState());

    const { token } = ctx.reduxStore.getState().authenticate;

    if (token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
      setTimeout(function() {
        Router.push('/');
      }, 0);
    }
  }
}
