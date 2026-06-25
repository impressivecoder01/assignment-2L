import { pool } from "../../db";
import type { RUser, User } from "../../utils/types.";
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
    async validateUser (email: string, password: string){
        const res = await pool.query( `
      SELECT * FROM users
      WHERE email = $1
      `,
      [email]
        )
        if(res.rows.length === 0){
                return null
            }
            const {password: hashedPassword, ...user} = res.rows[0] as  User
            const isValid = await bcrypt.compare(password,hashedPassword)
            return isValid? user : null
    }
}

export default new AuthService()