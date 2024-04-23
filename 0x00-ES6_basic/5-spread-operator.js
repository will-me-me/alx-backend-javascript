export default function concatArrays(array1, array2, string) {
  const ans = [...array1, ...array2, ...string];
  return ans;
}
