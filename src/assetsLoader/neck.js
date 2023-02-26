import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/neck/';
const KEYS = ['bend-backward', 'bend-forward', 'default', 'thick'];

const neck = {};

addImageUrlToObject(neck, KEYS, PATH);

export default neck;
