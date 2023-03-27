import base from "./AirTable";

export type ResolveResult = {
  id: string;
  name: string;
};

interface IDataBase {
  checkLoginPassword: (arg0: string, arg1: string) => Promise<ResolveResult>;
}

class DB implements IDataBase {
  private static _instance: DB = new DB();
  private dataBase: any = null;

  constructor() {
    if (DB._instance) return DB._instance;
    DB._instance = this;

    this.dataBase = base;
  }

  checkLoginPassword(login: string, password: string) {
    console.log("start checkLoginPassword");
    return new Promise<ResolveResult>((resolve, reject) => {
      this.dataBase("Users")
        .select({
          filterByFormula: `AND({login} = '${login}', {password} = '${password}')`,
          fields: ["id", "name"],
          maxRecords: 1,
        })
        .firstPage((err: any, records: any[]) => {
          console.log("checkLoginPassword result", records, err);

          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          if (records.length == 0) reject("404");
          else {
            const id = records[0].get("id");
            const name = records[0].get("name");
            if (id == null || id == "" || id == " ")
              reject("Получены неверные данные пользователя");

            resolve({ id, name });
          }
        });
    });
  }
}

const DataBase: IDataBase = new (DB as any)();

export default DataBase;
