import { pool } from "../../db";
import type { RUser } from "../../utils/types.";

class AuthService{
    async createUser(user: RUser&{password: string}){
        const {name, email,role} = user;
        const res = await pool.query(`
            INSERT INTO users (name, email, role, password)
            VALUES (${name}, ${email}, COALESCE(${role}, 'contributor'))
            RETURNING id,name,email,role,created_at,updated_at
            `)
            return res.rows[0];
    }
}