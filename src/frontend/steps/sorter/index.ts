// src\frontend\steps\sorter\index.ts

// type Sort = Record<string, Record<string, string>>;

export default function sorter(obj: Record<string, Record<string, string>>): Record<string, Record<string, string>> {
  const sorting: Record<any, any> | Record<string, Record<string, string>> = {};
  // const map = new Map();
  const arr: any[] = [];
  // let ind: number = 0;
  const listKeys = Object.keys(obj);
  // const listValues = Object.values(obj);
  console.log("[SORT]: Keys: ", listKeys);
  listKeys.forEach((key: string) => {
    const line: Record<string, Record<string, string>> | Record<any, any> = {};
    line[key] = obj[key];
    console.log("[SORT]: cycle: ", key);
    arr.push(line);
  });

  arr.sort((a: Record<string, Record<string, string>>, b: Record<string, Record<string, string>>) => {
    console.log("[SORT]: sort: ", a);
    const key1 = Object.keys(a)[0];
    const key2 = Object.keys(b)[0];
    console.log("[SORT]: sort: ", a[key1].date);
    const dateA: any = new Date(a[key1].date);
    const dateB: any = new Date(b[key2].date);
    const result = dateA - dateB;
    console.log("[SORT]: sort-date: ", result);
    return result;
  });

  console.log("[SORT]: ARR: ", arr);

  arr.forEach((item: Record<string, Record<string, string>>) => {
    const key: string[] = Object.keys(item);
    sorting[key[0]] = item[key[0]];
  });
  console.log("[SORT]: DATE: ", Object.keys(sorting));
  return sorting;
}
