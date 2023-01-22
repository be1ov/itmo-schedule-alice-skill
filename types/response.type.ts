import { IResponseBodyType } from './response-body.type';

export class IResponseType {
  version: number;
  session: string;
  response: IResponseBodyType;
}
