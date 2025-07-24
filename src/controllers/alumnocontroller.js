import { Alumno } from "../model/alumno.model.js";
import dayjs from "dayjs";

function calcularEdad(fechaNamiento){
    const fechahoy = dayjs();
    const nacimiento = dayjs(fechaNamiento);

    let edad = fechahoy.year() - nacimiento.year();

    return edad;

}

export const getAlumnos = async (req, res) => {
    try{
        const alumnos = await Alumno.obtenerTodos();
        res.json(alumnos);
    }
    catch (error) {
        console.error("Error al obtener los alumnos", error);
        res.status(500).json({ error: "Error al obtener los alumnos" });
    }
}


export const crearAlumno = async (req, res) => {
    const {codigo, paterno, materno,nombres, direccion, fecha}= req.body;
    const edad = calcularEdad(fecha);
    try {
        const result = await Alumno.crear(codigo, paterno, materno, nombres, direccion, fecha, edad);
        res.status(201).json({ message: "Alumno creado exitosamente", alumno: result });

    } catch (error) {
        console.error("Error al crear el alumno", error);
        res.status(500).json({ error: "Error al crear el alumno" });
    }
}

export const actualizarAlumno = async (req, res) => {
    const { codigo} = req.params;
    const { paterno, materno, nombres, direccion, fecha } = req.body;
    const edad = calcularEdad(fecha);
    
    try {
        const result = await Alumno.actualizar(codigo, paterno, materno, nombres, direccion, fecha, edad);
        
        if (!result) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }
        res.json({ message: "Alumno actualizado exitosamente", alumno: result });
    } catch (error) {
        console.error("Error al actualizar el alumno", error);
        res.status(500).json({ error: "Error al actualizar el alumno" });
    }
}

export const eliminarAlumno = async (req, res) => {
    const { codigo } = req.params;
    
    try {
        const result = await Alumno.eliminar(codigo);
        if (!result) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }
        res.json({ message: "Alumno eliminado exitosamente", alumno: result });
    } catch (error) {
        console.error("Error al eliminar el alumno", error);
        res.status(500).json({ error: "Error al eliminar el alumno" });
    }
}