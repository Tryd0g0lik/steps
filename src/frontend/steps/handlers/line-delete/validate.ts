

/**
 * True goal this function is checking the key. In datas is or not a key 
 * @param `item`: of this datas. It is all list datas on the page. It's format 'string'.
 * @param `key`: of this line's key which has be action 'delete'. It's format 'string'/
 * @returns boolean type. If 'true' it means the true key or 'false' the absence a true key
 */
export default (item: string, key: string): boolean => {

  if (typeof item === 'string' && item.length === 0) { return false }
  const str = item.slice(0);

  const status = str.indexOf(key) >= 0 ? true : false;
  return status
}

