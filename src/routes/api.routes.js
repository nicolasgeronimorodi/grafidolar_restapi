import {Router} from "express";

import {agregarCotizacion, renderCotizaciones, borrarCotizaciones} from "../controllers/api.controller.js"

const router=Router();

router.get("/cotizaciones", renderCotizaciones)
router.post("/cotizaciones/add", agregarCotizacion);
router.delete("/cotizaciones/delete/all", borrarCotizaciones);



export default router;