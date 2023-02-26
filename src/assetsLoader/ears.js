import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/ears/';
const KEYS = ['default', 'tilt-backward', 'tilt-forward'];

const ears = {};

addImageUrlToObject(ears, KEYS, PATH);

export default ears;
