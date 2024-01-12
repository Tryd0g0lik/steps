/**
 * This 'class Publisher' is a module for updating page's data.
 * There is entry point received a table's data from page's scale of records.
 * @params 'data': This entry point is getting types "{} | {string, {'my-key-string', 'my-data-string'}}"
 */
export default class Publisher {
  LStorage: string | Record<any, any>;
  data: string | Record<string, Record<string, string>>;

  constructor() {
    const localStorageData = localStorage.getItem("heandlersData");
    // const status = typeof localStorageData;
    this.data = "{}";
    if (localStorageData !== null) {
      this.data = localStorageData;
    }
  }

  private lstorageGet(): void {
    const localStorageData = localStorage.getItem("heandlersData");
    console.log(`[Publisher lstorageGetc]: handlersData: ${localStorageData} TYPE: ${typeof localStorageData}`);
    this.LStorage = typeof localStorageData === "string" ? localStorageData : "{}";
  }
  /**
   * There is 'data' localStorage and checking the data from lockalStorage
   * @returns true or false. If's value 'true' this means that a localStorage ('LStorage') equally 'data'. If value 'false' it means not qually.
   */
  private checker(): boolean {
    this.lstorageGet();
    console.log(`[Publisher checker]: LStorage: ${this.LStorage as string}`);
    console.log(`[Publisher checker]: this.data: ${this.data as string}`);
    let resp: boolean = false;
    resp = (this.data as string).includes(this.LStorage as string); // equally or not
    this.data = this.LStorage.slice(0);
    console.log(`[Publisher checker]: LStorage.resp: ${resp} // ${this.data as string}`);
    return resp;
  }

  /**
   * If a method 'checker' will be returned 'true' It means that localstorage doesn't haves a new data and returning 'false'.
   * 'checker' will be returned 'false' and data from locaclStorage will be returned.
   */
  get dataGetForPublish(): (boolean | Record<string, Record<string, string>>) {
    let respons: (boolean | Record<string, Record<string, string>>) = false;
    const checker = this.checker();
    console.log(`[Publisher publish]: CHECKER: ${checker}`);
    console.log(`[Publisher publish]: respons BEFORE: ${respons}`);
    respons = !checker ? this.LStorage as Record<any, any> : respons;
    console.log("[Publisher publish]: respons AFTER: ", respons);
    // if ((typeof respons).includes("string")) {
    //   console.log("[Publisher publish]: data: ", this.data);
    //  return respons;
    // }
    console.log("[Publisher publish]: LStorage.lstorageGet: ", this.LStorage);
    return respons;
  }
}
