
import { db } from "../database/connection";
import { ContactDto, UpdateContactDto } from "../dtos/contact.dto";
export class ContactService {
  
  contact = db.contacts;
  async create(contactData: ContactDto) {
    try {
      const data = await this.contact.create({
        fname: contactData.fname,
        lname: contactData.lname,
        phoneNo: contactData.phoneNo
      });
      return {
        data: { message: "contact created successfully", data: data },
        status: 201,
      };
    } catch (error) {
      return {
        data: { message: "cannot create contAct", err: error },
        status: 500,
      };
    }
  }
  async update(id: number, attrs: Partial<UpdateContactDto>) {
    try {
      const data = await this.contact.update(attrs, {
        where: {
          id: id,
        },
      });
      return {
        data: { message: "Contact updated successfully", data: data },
        status: 200,
      };
    } catch (error) {
      return {
        data: { message: "cannot update Contact", err: error },
        status: 500,
      };
    }
  }
  async display() {
    try {
      const data = await this.contact.findAll();
      return {
        data: { message: "Contact fetched successfully", data: data },
        status: 200,
      };
    } catch (error) {
      return {
        data: { message: "cannot display contact", err: error },
        status: 500,
      };
    }
  }
  async displayOne(id: number) {
    try {
      const data = await this.contact.findOne({where:{id:id}});
      return {
        data: { message: "Contact fetched successfully", data: data },
        status: 200,
      };
    } catch (error) {
      return {
        data: { message: "cannot display contact", err: error },
        status: 500,
      }
    }
  }
  async delete(id: number) {
    try {
      const data = await this.contact.destroy({
        where: {
          id: id,
        },
      });
      return {
        data: { message: "Contact deleted successfully", data: data },
        status: 200,
      };
    } catch (error) {
      return {
        data: { message: "cannot delete contact", err: error },
        status: 500,
      };
    }
  }
}
