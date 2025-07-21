import  pg from 'pg';

const {Pool} = pg ;

export const pool = new Pool({
    host:"dpg-d1va68adbo4c73fbjq30-a.oregon-postgres.render.com",
    port:"5432",
    user:"colegio_7ykd_user",
    password:"Ko8l2xaALy3f8gH6dmztxaDg4Hf07FfQ",
    database:"colegio_7ykd",
    ssl: true,

});

export async function connect() {
    try {
        await pool.connect();
        console.log("Conexion exitosa a la base de datos")
    }
    catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
}
