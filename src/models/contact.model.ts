import { DataTypes, Sequelize } from "sequelize";

export class ContactModel{
    static schema = (sequelize: Sequelize) => {
        const contact = sequelize.define('contact', {
            fname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phoneNo:{
                type: DataTypes.DECIMAL,
                allowNull:true
            },
        })
        return contact;
    }
}