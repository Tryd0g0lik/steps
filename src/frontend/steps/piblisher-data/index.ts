
/**
 * This 'class Pulisher' is for updating page's data.
 * There is entry point received a table's data from page's scale of records.
 * This entry point is getting types "{} | {string, {'my-key-string', 'my-data-string'}}"
 */
module.exports = class Pulisher {
  LStorage: string;
  data: {} | Record<string, Record<string, string>>;

  constructor(data: ({} | Record<string, Record<string, string>>)) {
    const handlersData = localStorage.getItem('handlersData');
    !handlersData ? this.LStorage = String({}) : (
      this.LStorage = JSON.stringify(handlersData)
    );
    this.data = String(data).length === String({}).length ? String(data) : JSON.stringify(data);
  }

  /**
   * There is 'data' localStorage and checking the data from lockalStorage
   * @returns true or false. If's value 'true' this means that a localStorage ('LStorage') equally 'data'. If value 'false' it means not qually.
   */
  private checker(): boolean {
    let resp: boolean = false;
    this.data === this.LStorage ? (resp = true) : (resp = false);
    return resp;
  };

  /**
   * If a method 'checker' will be returned 'true' It means that localstorage doesn't haves a new data and returning 'false'.
   * 'checker' will be returned 'false' and data from locaclStorage will be returned.
   */
  get publish(): (boolean | {} | Record<string, Record<string, string>>) {
    let respons: (boolean | {} | Record<string, Record<string, string>>) = false;
    // const checker = ;
    this.checker() === false ? respons = JSON.parse(this.LStorage) : respons;
    return respons;
  }

}

