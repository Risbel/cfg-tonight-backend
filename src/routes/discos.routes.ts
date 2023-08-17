import { Router } from 'express'
const router = Router()

import { createDisco, getDisco, getDiscos, updateDisco, deleteDisco } from '../controllers/discos.controllers'

router.get('/', getDiscos)
router.get("/:id", getDisco)
router.post("/", createDisco)
router.put("/:id", updateDisco)
router.delete("/:id", deleteDisco)

export default router