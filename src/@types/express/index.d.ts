
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        [key: string!]: string;
      };
      token: string;
    }
  }
}
