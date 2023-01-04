import axios from "axios";
import { Request, Response } from "express";

export async function httpCat(req: Request, res: Response) {
  try {
    const {id} = req.params
    const response = await axios.get(`https://http.cat/${id}`, {
      responseType: "arraybuffer",
    });
    res.contentType("image/png");
    res.end(Buffer.from(response.data, 'utf-8')) 
  } catch (error: any) {
    res.send(error.message);
  }
}
