import { IncomingHttpHeaders } from "http";

export interface IAdditionalHeaders extends Headers {
  userid?: string;
  role: string;
  admin: string;
}

export interface IRequest extends Request {
  headers: IncomingHttpHeaders & IAdditionalHeaders;
}
