/** @format */
export default function(obj: any) {
  let result = "";
  let tempKey = "";
  for (let i in obj) {
    if (/^r/.test(i)) {
      tempKey = i.slice(1, i.length);
      result += `${tempKey.toLowerCase()}:${(obj as any)[i]}px;`;
      // continue;
    }
    // result += `${i}:${(obj as any)[i]};`;
  }
  return result;
}
