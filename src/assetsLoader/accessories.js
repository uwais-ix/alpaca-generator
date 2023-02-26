import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/accessories/';
const KEYS = ['earings', 'flower', 'glasses', 'headphone', 'null:'];

const accessories = {};

addImageUrlToObject(accessories, KEYS, PATH);

export default accessories;
