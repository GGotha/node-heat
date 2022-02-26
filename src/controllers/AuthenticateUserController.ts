import { Request, response, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const service = new AuthenticateUserService();

    const { code } = req.body;

    try {
      const { token, user } = await service.execute(code);

      return res.send({
        success: true,
        message: "User authenticated",
        user,
        token,
      });
    } catch (err) {
      return res.send({ success: false, error: err.message });
    }
  }
}

export { AuthenticateUserController };
