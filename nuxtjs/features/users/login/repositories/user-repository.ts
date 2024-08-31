import { type FieldPacket, type PoolConnection, type RowDataPacket } from "mysql2/promise";

export class UserRepository {
    static async findByEmail(pool: PoolConnection, email: string): Promise<[RowDataPacket[], FieldPacket[]]> {
        const query = `SELECT id, username, email, password, utc, created_at FROM user WHERE email = ?;`
        const result = await pool.execute<RowDataPacket[]>(query, [email])
        return result
    }
}