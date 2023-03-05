declare global {
  namespace Express {
    interface Request {
      headers: IncomingHttpHeaders & {
        admin: string
      }
    }

    interface Headers {
      admin: string;
    }
  }
}
