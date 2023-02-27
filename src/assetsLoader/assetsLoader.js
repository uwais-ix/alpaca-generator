import accessories from './accessories';
import backgrounds from './backgrounds';
import ears from './ears';
import eyes from './eyes';
import hair from './hair';
import leg from './leg';
import mouth from './mouth';
import neck from './neck';
import nose from './nose';

const Assets = {
  accessories: accessories,
  backgrounds: backgrounds,
  ears: ears,
  eyes: eyes,
  hair: hair,
  leg: leg,
  mouth: mouth,
  neck: neck,
  nose: nose,
};

const startingState = {
  initial: {
    accessories: 'headphone',
    backgrounds: 'blue50',
    ears: 'default',
    eyes: 'default',
    hair: 'default',
    leg: 'default',
    mouth: 'default',
    neck: 'default',
    nose: 'nose',
  },
  Assets,
};

export default startingState;
