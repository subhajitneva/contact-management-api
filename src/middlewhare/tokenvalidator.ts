import * as jwt from 'jsonwebtoken';
import express from 'express';
export class TokenValidatorMiddlehare{
    static tokenValidate = (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        try {
          const authHeader = req.headers.authorization;
          if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
          }
    
          const [bearer, token] = authHeader.split(' ');
          if (bearer.toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'Invalid token format' });
          }
    
          const secret = process.env.SECRET_KEY;
          const decoded = jwt.verify(token, secret);
          req.body.token = token;
          next();
        } catch (error) {
          return res.status(401).json({ message: 'Auth failed' });
        }
      };
}
