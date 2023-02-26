export default function addImageUrlToObject(obj, keys, path, ext = '.png') {
  keys.forEach((key) => (obj[key] = `${path}${key}${ext}`));
}
