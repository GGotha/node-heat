import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new ProfileUserService();
    const profile = await service.execute(user_id);

    return res.send({ success: true, profile });
  }
}

export { ProfileUserController };
