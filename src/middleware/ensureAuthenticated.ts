import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headersAuthorization = req.headers.authorization;

  let hasAuthorizationOnHeader: boolean = true;

  if (!headersAuthorization || headersAuthorization === "") {
    hasAuthorizationOnHeader = false;
  }

  if (!hasAuthorizationOnHeader) {
    return res.status(401).json({
      status: false,
      message: "Invalid Token",
    });
  }

  const [, token] = headersAuthorization.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).send({ status: false, message: "Expired Token" });
  }
}
