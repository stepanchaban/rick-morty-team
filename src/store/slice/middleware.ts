import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setSearchValue } from './searchValueSlice';
import { rickMorthyApi } from '@services/rickMorthyApi';
import store from '@store/store';

const searchValueMiddleware = createListenerMiddleware();

searchValueMiddleware.startListening({
  actionCreator: setSearchValue,
  effect: async action => {
    store.dispatch(
      rickMorthyApi.endpoints.getCharacters.initiate(action.payload),
    );
  },
});

export default searchValueMiddleware;
