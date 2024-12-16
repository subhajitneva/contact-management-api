import { ContactDto, UpdateContactDto } from './../dtos/contact.dto';
import express from "express";
import { db } from "../database/connection";
import * as dotenv from "dotenv";
import { plainToClass } from "class-transformer";
import { isNumber } from "class-validator";
import { DtoValidatorMiddlehare } from "../middlewhare/dtovalidator";
import { ContactService } from '../services/contact.service';
dotenv.config();
const Contact = db.contacts;
export class ContactController {
  
  contactService: ContactService = new ContactService();
  create = async (req: express.Request, res: express.Response) => {
    let contactData = plainToClass(ContactDto, req.body);
    const isNotValidContact = await DtoValidatorMiddlehare.dtoValidate(
        contactData
    );
    if (isNotValidContact.length > 0) {
      res.status(412).json(isNotValidContact);
    } else {
      let result = await this.contactService.create(contactData);
      res.status(result.status).send(result.data);
    }
  };
  remove = async (req: express.Request, res: express.Response) => {
    let pid = req.params.id;
    if (!pid || isNumber(pid)) {
      return res.status(400).json({ message: "invalid Contact id" });
    }
    let result = await this.contactService.delete(Number(pid));
    res.status(result.status).send(result.data);
  };
  display = async (req: express.Request, res: express.Response) => {
    let result = await this.contactService.display();
    res.status(result.status).send(result.data);
  };
  displayOne = async (req: express.Request, res: express.Response) => {
    let pid = req.params.id;
    if (!pid || isNumber(pid)) {
      return res.status(400).json({ message: "invalid Contact id" });
    }
    let result = await this.contactService.displayOne(Number(pid));
    res.status(result.status).send(result.data);
  };
  update = async (req: express.Request, res: express.Response) => {
    let pid = req.params.id;
    if (!pid || isNumber(pid)) {
      return res.status(400).json({ message: "invalid Contact id" });
    }
    let contactData = plainToClass(UpdateContactDto, req.body);
    const isNotValidContact = await DtoValidatorMiddlehare.dtoValidate(
        contactData
    );
    if (isNotValidContact.length > 0) {
      res.status(412).json(isNotValidContact);
    } else {
      let result = await this.contactService.update(Number(pid), contactData);
      res.status(result.status).send(result.data);
    }
  };
}
