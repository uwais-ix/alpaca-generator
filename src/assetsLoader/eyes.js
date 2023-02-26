import addImageUrlToObject from '../utils/addImageUrl';

const PATH = '/eyes/';
const KEYS = ['angry', 'default', 'naughty', 'panda', 'smart', 'star'];

const eyes = {};

addImageUrlToObject(eyes, KEYS, PATH);

export default eyes;
