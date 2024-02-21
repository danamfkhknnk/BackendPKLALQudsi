const { Router } = require("express");

const { createPaket, getPaket, getSingle, editPaket, deletePaket } = require("../controllers/paketController");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();
router.post("/", authMiddleware, createPaket);
router.get("/", getPaket);
router.get("/:id", getSingle);
router.patch("/:id", authMiddleware, editPaket);
router.delete("/:id", authMiddleware, deletePaket);

module.exports = router;
