import startingState from '../assetsLoader/assetsLoader';

export const initialState = {
  current: startingState.initial,
  assets: startingState.Assets,
};

export const reducerFunc = (state, action) => {
  // validate action type
  switch (action.type) {
    case 'randomize':
      for (let part in state.current) {
        const options = Object.keys(state.assets[part]);
        const randomOption = options[options.length * Math.random() << 0];
        state.current[part] = randomOption;
      }
      return;
    case 'accessories':
      break;
    case 'backgrounds':
      break;
    case 'ears':
      break;
    case 'eyes':
      break;
    case 'hair':
      break;
    case 'leg':
      break;
    case 'mouth':
      break;
    case 'neck':
      break;
    case 'nose':
      break;
    default:
      throw Error(`store/AppReducer.js || Unknown Action Type ${action.type}`);
  }

  // update current state
  state.current[action.type] = action.payload;
};
