import { Router } from "express";

const router = Router()

router.route("/rooms").get()
router.route("/rooms/:id").get()


export default router