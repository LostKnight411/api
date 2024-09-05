import { Router } from "express";
const router = Router();

import makers from "./makersList.js";

router.get("/", (req, res) => {
	res.json(makers);
});

export default router;
