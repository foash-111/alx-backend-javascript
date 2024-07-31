export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  try {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    dataView.setInt8(position, value);
    return dataView;
  } catch (e) {
    console.error(e);
  }
  return null;
}
