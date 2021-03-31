interface IPossibleKeysResult {
  name: string,
  type: string,
  attributes?: IPossibleKeysResult[];
}

export function getAllPossibleKeysByTagName(element: any) {
  const possibleKeys: IPossibleKeysResult[] = [];

  for (let key in element) {
    if (typeof (element as any)[key] === 'object') {
      if (key === 'style') {
        possibleKeys.push({
          name: key,
          type: typeof (element as any)[key],
          attributes: getAllPossibleKeysByTagName((element as any)[key]),
        });
      }
    } else {
      possibleKeys.push({
        name: key,
        type: typeof (element as any)[key],
      });
    }
  }

  return possibleKeys;
}
