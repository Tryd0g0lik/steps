// src\frontend\steps\sorter\index.ts

type Sort = Record<string, Record<string, string>>;

export default function sorter(obj: Sort): Sort {
  const sorting: Record<any, any> | Sort = {};
  const arr: any[] = [];
  const listKeys = Object.keys(obj);
  console.log("[SORT]: Keys: ", listKeys);
  listKeys.forEach((key: string) => {
    const line: Sort | Record<any, any> = {};
    line[key] = obj[key];
    console.log("[SORT]: cycle: ", key);
    arr.push(line);
  });

  arr.sort((a: Sort, b: Sort) => {
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

  arr.forEach((item: Sort) => {
    const key: string[] = Object.keys(item);
    sorting[key[0]] = item[key[0]];
  });

  console.log("[SORT]: DATE: ", Object.keys(sorting));
  return sorting;
}
