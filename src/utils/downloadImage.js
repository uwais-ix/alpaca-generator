import html2canvas from 'html2canvas';

// saves element as image
export async function captureElement(
  element,
  type = 'image/png',
  encoderOptions = 1
) {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL(type, encoderOptions);
  downloadImage(image);
}

function downloadImage(image, fileName = 'default') {
  let link = document.createElement('a');

  link.href = image;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
