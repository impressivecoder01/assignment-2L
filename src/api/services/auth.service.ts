import { pool } from "../../db";
import type { RUser } from "../../utils/types.";
import bcrypt from "bcrypt"

class AuthService{
    async createUser(user: RUser&{password: string}){
        const {name, email,role, password} = user;
        const hash = await bcrypt.hash(password, 10);
        const res = await pool.query(`
            
            INSERT INTO users (name, email, role, password)
  VALUES ($1, $2, COALESCE($3, 'contributor'), $4)
  RETURNING id, name, email, role, created_at, updated_at
  `,
  [name, email, role, hash]
            )
            return res.rows[0];
    }
}

export default new AuthService()