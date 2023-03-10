import {useContext} from 'react';
import {initialState, reducerFunc} from './AppReducer';
import {AppContext, AppContextDispatcher} from './AppContext';
import { useImmerReducer } from 'use-immer';

const AlpacaProvider = (props) => {
  const [appReducer, appDispatcher] = useImmerReducer(reducerFunc, initialState);

  return (
    <AppContext.Provider value={appReducer}>
      <AppContextDispatcher.Provider value={appDispatcher}>
        {props.children}
      </AppContextDispatcher.Provider>
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}

export function useAppDispatcher() {
  return useContext(AppContextDispatcher);
}

export default AlpacaProvider;
