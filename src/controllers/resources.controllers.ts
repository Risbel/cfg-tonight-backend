import { Request, Response } from "express";
import Resource from "../models/Resource";

export const getResources = async (_req: Request, res: Response) => {
  try {
    const resources = await Resource.findAll();
    return res.status(200).json(resources);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    await Resource.create({
      name,
    });

    return res.status(204).json({ message: "New resource created successfully." });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
