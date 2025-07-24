import { pool } from "../config/db.js";

export const Alumno ={
    async obtenerTodos() {
        const result = await pool.query("SELECT * FROM alumno");
        return result.rows;
    },

    async crear(codigo, paterno, materno, nombres, direccion, fecha , edad) {
        const result = await pool.query(
            "INSERT INTO alumno (al1_ccodigo, al1_cpaterno, al1_cmaterno, al1_cnombres, al1_cdireccion, al1_cfecha, al1_nedad) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [codigo, paterno, materno, nombres, direccion, fecha, edad]
        );
        return result.rows[0];
    },

    async actualizar(codigo, paterno, materno, nombres, direccion, fecha, edad) {
        const result = await pool.query(
            "UPDATE alumno SET al1_cpaterno = $2, al1_cmaterno = $3, al1_cnombres = $4, al1_cdireccion = $5, al1_cfecha = $6, al1_nedad = $7 WHERE al1_ccodigo = $1 RETURNING *",
            [codigo, paterno, materno, nombres, direccion, fecha, edad]
        );
        if (result.rowCount === 0) {
            return null; // No se encontró el alumno
        }
        return result.rows[0];
    },

    async eliminar(codigo) {
        const result = await pool.query(
            "DELETE FROM alumno WHERE al1_ccodigo = $1 RETURNING *",
            [codigo]
        );
        if (result.rowCount === 0) {
            return null; // No se encontró el alumno
        }
        return result.rows[0];
    }
}