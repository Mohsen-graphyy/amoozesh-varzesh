import { $fetch,FetchOptions } from 'ohmyfetch';
import { defineNuxtPlugin } from '#app';
import General from '~~/services/modules/general';

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  general: General
}

export default defineNuxtPlugin((nuxtApp) => {

  
  const fetchOptions: FetchOptions = {
//      baseURL: nuxtApp.$config.API_BASE_URL,
        baseURL : 'https://random-data-api.com/' // this is only for test not production
  }

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);
  
  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    general: new General(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});