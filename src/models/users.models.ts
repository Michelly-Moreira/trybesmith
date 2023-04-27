import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  async signin(user: User): Promise<User> {
    const { username, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}

// select => RowDataPacket[]
// update => OkPacket
// delet => OkPacket
// insert => ResultSetHeader

// [data, buffer] => retorno do execute