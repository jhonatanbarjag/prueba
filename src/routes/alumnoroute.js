import { Router } from "express";
import { getAlumnos, crearAlumno, actualizarAlumno, eliminarAlumno } from "../controllers/alumnocontroller.js";

const router = Router();

router.get('/', (req, res) => {
    res.send("Welcome to the Alumni API");
});
router.get('/alumnos', getAlumnos);
router.post('/alumnos', crearAlumno);
router.patch('/alumnos/:codigo', actualizarAlumno);
router.delete('/alumnos/:codigo', eliminarAlumno);

export default router;