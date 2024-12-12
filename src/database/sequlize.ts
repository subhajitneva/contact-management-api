import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();
export class SequlizeConfig {
  sequelize:Sequelize  
  constructor(dbtype: string){
    switch (dbtype) {
      case dbtype = 'mysql':
        this.sequelize = new Sequelize(
          process.env.DB_DATABASE,
          process.env.DB_USERNAME,
          process.env.DB_PASSWORD,
          {
            host: process.env.DB_HOST,
            dialect: "mysql",
          }
        );
        break;
        case dbtype = 'msSql':
          this.sequelize = new Sequelize(
            process.env.DB_DATABASE,
            process.env.DB_USERNAME,
            process.env.DB_PASSWORD,
            {
              host: process.env.DB_HOST,
              dialect: "mssql",
            }
          );
          break;
          case dbtype = 'sqlite':
          this.sequelize = new Sequelize(
            {
              dialect: "sqlite",
              storage: process.env.DB_PATH
            }
          );
          break;
      default:
        this.sequelize = new Sequelize(
          process.env.DB_DATABASE,
          process.env.DB_USERNAME,
          process.env.DB_PASSWORD,
          {
            host: process.env.DB_HOST,
            dialect: "mysql",
          }
        );
        break;
    }
      this.authenticate();
  }
  async authenticate(){
    try {
      await this.sequelize.authenticate();
      console.log('Database connected');
    } catch (error) {
      console.log(error);
    }
  }
}
