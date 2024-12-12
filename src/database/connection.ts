import { Sequelize, Error } from "sequelize";
import { SequlizeConfig } from './sequlize';
import { ContactModel } from "../models/contact.model";
let sequlizeConfig = new SequlizeConfig(process.env.DB_DBTYPE);
export const db = {
  Sequelize: Sequelize,
  sequelize: sequlizeConfig.sequelize,
  contacts: ContactModel.schema(sequlizeConfig.sequelize)
};

function dbSync(execSync: string){
   console.log('sync info',execSync);
   
   if(execSync == "true"){
      sequlizeConfig.sequelize.sync({ force: false, alter: true })
        .then(() => {
           console.log('Resync done');
        })
        .catch((syncErr: Error) => {
           console.log(syncErr);
        });
   }
   else{
      console.log('Database sync is offline')
   }
}
dbSync(process.env.DB_SYNC);