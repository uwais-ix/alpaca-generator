import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/hair/';
const KEYS = ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'];

const hair = {};

addImageUrlToObject(hair, KEYS, PATH);

export default hair;
