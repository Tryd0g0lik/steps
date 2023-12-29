
/**
 * This 'class Pulisher' is a module for updating page's data.
 * There is entry point received a table's data from page's scale of records.
 * @params 'data': This entry point is getting types "{} | {string, {'my-key-string', 'my-data-string'}}"
 */
module.exports = class Pulisher {
  LStorage: string | Record<any, any>;
  data: string | Record<string, Record<string, string>>;

  constructor() {
    this.data = '{}';
  }



  private lstorageGet() {
    const handlersData = localStorage.getItem('heandlersData');
    console.log(`[Pulisher lstorageGetc]: handlersData: ${handlersData} TYPE: ${typeof handlersData}`);
    this.LStorage = typeof handlersData === 'string' ? handlersData : '{}';
  }
  /**
   * There is 'data' localStorage and checking the data from lockalStorage
   * @returns true or false. If's value 'true' this means that a localStorage ('LStorage') equally 'data'. If value 'false' it means not qually.
   */
  private checker(): boolean {
    this.lstorageGet();
    console.log(`[Pulisher checker]: LStorage.LStorage: ${this.LStorage}`);

    let resp: boolean = false;
    resp = this.data === this.LStorage ? true : false;
    console.log(`[Pulisher checker]: LStorage.resp: ${this.LStorage}`);
    return resp;
  };

  /**
   * If a method 'checker' will be returned 'true' It means that localstorage doesn't haves a new data and returning 'false'.
   * 'checker' will be returned 'false' and data from locaclStorage will be returned.
   */
  get dataGetForPublish(): (boolean | {} | Record<string, Record<string, string>>) {
    let respons: (boolean | {} | Record<string, Record<string, string>>) = false;
    const checker = this.checker();
    console.log(`[Pulisher publish]: checker: ${checker}`);
    respons = checker === false ? this.LStorage as Record<any, any> : respons;
    console.log(`[Pulisher publish]: respons: ${respons}`);
    if (typeof respons !== 'boolean') {
      this.data = respons;
      respons = false;
      console.log(`[Pulisher publish]: data: ${this.data}`);
      return this.data;
    };
    console.log(`[Pulisher publish]: LStorage.lstorageGet: ${this.LStorage}`);
    return false;
  }

}

