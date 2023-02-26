import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/backgrounds/';
const KEYS = [
  'blue50',
  'blue60',
  'blue70',
  'darkblue30',
  'darkblue50',
  'darkblue70',
  'green50',
  'green60',
  'green70',
  'grey40',
  'grey70',
  'grey80',
  'red50',
  'red60',
  'red70',
  'yellow50',
  'yellow60',
  'yellow70',
];

const backgrounds = {};

addImageUrlToObject(backgrounds, KEYS, PATH);

export default backgrounds;
