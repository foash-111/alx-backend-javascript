export default function createInt8TypedArray(length = 0, position = 0, value = 0) {
  try {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    dataView.setInt8(position, value);
    return dataView;
  } catch (e) {
    console.error('Position outside range');
  }
  return 'Position outside range';
}
