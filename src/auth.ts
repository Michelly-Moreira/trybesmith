import jwt, { SignOptions } from 'jsonwebtoken';
// import statusCode from '../src/statusCode';

const secretKey = process.env.JWT_SECRET || 'qualquer string';

const configJWT = {
  expiresIn: '1d', // expira em 1 dia
  algorithm: 'HS256',
} as SignOptions;

// gerando o token
const generateToken = (payload: number) => {
  const token = jwt.sign({ data: { id: payload } }, secretKey, configJWT); 
  // console.log(token);
  return token;
};
/* 
// verificando token para validação
const validateToken = (token: string) => {
  if (!token) throw (statusCode.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

// leitura do conteúdo (decode)
const decodeToken = (token: string) => {
  if (!token) throw (statusCode.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  const decoded = jwt.decode(token, secretKey);
  return decoded;
};
 */
export = generateToken;