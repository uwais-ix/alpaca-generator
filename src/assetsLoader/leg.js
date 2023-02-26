import addImageUrlToObject from "../utils/addImageUrl";

const PATH = '/leg/';
const KEYS = [
  'bubble-tea',
  'cookie',
  'default',
  'game-console',
  'tilt-backward',
  'tilt-forward',
];

const leg = {};

addImageUrlToObject(leg, KEYS, PATH);

export default leg;
