import { Request, response, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessagesService();

    const messages = await service.execute();

    return res.send({ success: true, messages });
  }
}

export { GetLast3MessagesController };
