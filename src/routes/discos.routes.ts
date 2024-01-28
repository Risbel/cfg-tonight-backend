import { Router } from "express";
const router = Router();

import {
  createDisco,
  getDisco,
  getDiscos,
  updateDisco,
  deleteDisco,
  getRolesByIdDisco,
  getMyEvents,
} from "../controllers/discos.controllers";
import { verifyToken } from "../middlewares/authorization";

router.get("/", getDiscos);
router.get("/roles/:id", getRolesByIdDisco);
router.get("/myEvents/:userId", getMyEvents);
router.get("/:slug/:userId?", getDisco);
router.post("/", createDisco);
router.put("/:id", updateDisco);
router.delete("/:id", deleteDisco);

export default router;
