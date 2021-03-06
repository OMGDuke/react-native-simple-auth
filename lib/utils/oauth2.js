import {
  curry,
} from 'ramda';

export const authorizationUrl = curry(
  (url, appId, callback, scope, responseType = 'token', state, botPrompt = 'normal') =>
    `${url}?access_type=offline&scope=${encodeURIComponent(scope)}&
      state=${state}&bot_prompt=${botPrompt}&
      redirect_uri=${encodeURIComponent(callback)}&
      response_type=${responseType}&
      client_id=${appId}`.replace(/\s+/g, ''),
);

export const getHeaders = token => ({ Authorization: `Bearer ${token}` });
