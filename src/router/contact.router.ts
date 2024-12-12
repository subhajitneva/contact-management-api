import express from 'express';
import { TokenValidatorMiddlehare } from '../middlewhare/tokenvalidator';
import { ContactController } from '../controllers/contact.controller';
export const ContactRouter =  (router: express.Router, prefix='') => {
  const contact = new ContactController();
  
  /* GET Contacts listing. */
  router.post(prefix+'/create', contact.create);
  router.get(prefix+'/display', contact.display);
  router.get(prefix+'/displayone/:id', contact.displayOne);
  router.put(prefix+'/update/:id', contact.update);
  router.delete(prefix+'/remove', contact.remove);
}