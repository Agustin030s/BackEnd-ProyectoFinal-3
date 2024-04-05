import { Router } from "express";

const router = Router()

router.route("/reservation").get().post()
router.route( "/reservation/:id").get().delete().put()

export default router