
/**
 * This 'class Publisher' is a module for updating page's data.
 * There is entry point received a table's data from page's scale of records.
 * @params 'data': This entry point is getting types "{} | {string, {'my-key-string', 'my-data-string'}}"
 */
module.exports = class Publisher {
  LStorage: string | Record<any, any>;
  data: string | Record<string, Record<string, string>>;

  constructor() {
    this.data = (typeof localStorage.getItem('heandlersData') === "string") ? localStorage.getItem('heandlersData') as string : '{}';
  }



  private lstorageGet() {
    const handlersData = localStorage.getItem('heandlersData');
    console.log(`[Publisher lstorageGetc]: handlersData: ${handlersData} TYPE: ${typeof handlersData}`);
    this.LStorage = typeof handlersData === 'string' ? handlersData : '{}';
  }
  /**
   * There is 'data' localStorage and checking the data from lockalStorage
   * @returns true or false. If's value 'true' this means that a localStorage ('LStorage') equally 'data'. If value 'false' it means not qually.
   */
  private checker(): boolean {
    this.lstorageGet();
    console.log(`[Publisher checker]: LStorage: ${this.LStorage}`);
    console.log(`[Publisher checker]: this.data: ${this.data}`);
    let resp: boolean = false;
    resp = (this.data as string).indexOf(this.LStorage as string) !== -1 ? true : false; // equally or not
    this.data = this.LStorage;
    console.log(`[Publisher checker]: LStorage.resp: ${resp} // ${this.data}`);
    return resp;
  };

  /**
   * If a method 'checker' will be returned 'true' It means that localstorage doesn't haves a new data and returning 'false'.
   * 'checker' will be returned 'false' and data from locaclStorage will be returned.
   */
  get dataGetForPublish(): (boolean | {} | Record<string, Record<string, string>>) {
    let respons: (boolean | {} | Record<string, Record<string, string>>) = false;
    const checker = this.checker();
    console.log(`[Publisher publish]: CHECKER: ${checker}`);
    console.log(`[Publisher publish]: respons BEFORE: ${respons}`)
    respons = checker === false ? this.LStorage as Record<any, any> : respons;
    console.log(`[Publisher publish]: respons AFTER: ${respons}`);
    if (typeof respons !== 'boolean' ) {
      

      console.log(`[Publisher publish]: data: ${this.data}`);
      return respons;
    };
    console.log(`[Publisher publish]: LStorage.lstorageGet: ${this.LStorage}`);
    return false;
  }

}

