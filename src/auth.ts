/* const jwt = require('jsonwebtoken');

const httpErrGenerator = (status, message) => ({
  status, message,
});

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '1d', // expira em 1 minuto
  algorithm: 'HS256',
};
  // gerando o token
const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT); 
  // console.log(token);
  return token;
}; */
/* generateToken({
    email: 'lewishamilton@gmail.com',
    password: '123456',
  }); */

// verificando token para validação
/* const validateToken = (token) => {
  if (!token) throw httpErrGenerator(401, 'Token not found');
  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

// leitura do conteúdo (decode)
const decodeToken = (token) => {
  if (!token) throw httpErrGenerator(401, 'Token not found');
  const decoded = jwt.decode(token, secretKey);
  return decoded;
}; */
