import { NextFunction } from "express";
import { roles } from "../auth/roles";
import { IRequest } from "../interfaces/request-headers";

export const isAdmin = (req: IRequest, res: Response, next: NextFunction) => {
  const { role } = req.headers;
  
  req.headers.admin = (role === roles.admin).toString(); // 'validation'

  next();
}