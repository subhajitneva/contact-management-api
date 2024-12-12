import express from 'express';
import {ContactRouter} from './contact.router'
export class IndexRouter {
  router = express.Router(); 
  route(){
    ContactRouter(this.router,'/contact')
    return this.router;
  }
}