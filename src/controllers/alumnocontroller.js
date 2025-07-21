import { pool } from "../config/db.js";
import dayjs from "dayjs";

export const getAlumnos = async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM alumno");
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error al obtener los alumnos", error);
        res.status(500).json({ error: "Error al obtener los alumnos" });
    }
}

function calcularEdad(fechaNamiento){
    const fechahoy = dayjs();
    const nacimiento = dayjs(fechaNamiento);

    let edad = fechahoy.year() - nacimiento.year();

    return edad;

}


export const crearAlumno = async (req, res) => {
    const {codigo, paterno, materno,nombres, direccion, fecha}= req.body;
    const edad = calcularEdad(fecha);
    try {
        const result = await pool.query(
            "INSERT INTO alumno (al1_ccodigo, al1_cpaterno, al1_cmaterno, al1_cnombres, al1_cdireccion, al1_cfecha, al1_nedad) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [codigo, paterno, materno, nombres, direccion, fecha, edad]
        );
        res.json({ message: "Alumno creado exitosamente", edad});
        res.status(201).json(result.rows[0]);
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
        const result = await pool.query(
            "UPDATE alumno SET al1_cpaterno = $2, al1_cmaterno = $3, al1_cnombres = $4, al1_cdireccion = $5, al1_cfecha = $6, al1_nedad = $7 WHERE al1_ccodigo = $1 RETURNING *",
            [codigo, paterno, materno, nombres, direccion, fecha, edad]
        );
        
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }
        
        res.json({ message: "Alumno actualizado exitosamente", alumno: result.rows[0] });
    } catch (error) {
        console.error("Error al actualizar el alumno", error);
        res.status(500).json({ error: "Error al actualizar el alumno" });
    }
}

export const eliminarAlumno = async (req, res) => {
    const { codigo } = req.params;
    
    try {
        const result = await pool.query(
            "DELETE FROM alumno WHERE al1_ccodigo = $1 RETURNING *",
            [codigo]
        );
        
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }
        
        res.json({ message: "Alumno eliminado exitosamente", alumno: result.rows[0] });
    } catch (error) {
        console.error("Error al eliminar el alumno", error);
        res.status(500).json({ error: "Error al eliminar el alumno" });
    }
}