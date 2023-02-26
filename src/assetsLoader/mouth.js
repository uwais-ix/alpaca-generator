import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/mouth/';
const KEYS = ['astonished', 'default', 'eating', 'laugh', 'tongue'];

const mouth = {};

addImageUrlToObject(mouth, KEYS, PATH);

export default mouth;
