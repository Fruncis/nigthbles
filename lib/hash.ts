import bcrypt from "bcryptjs";

async function hashPassword(plainPassword: string) {
  const salt =  bcrypt.genSaltSync(10);
  return  bcrypt.hashSync(plainPassword, salt);
}

async function verifyPassword(plainPassword: string, hashedPassword: string) {
  return  bcrypt.compareSync(plainPassword, hashedPassword);
}

export {hashPassword as hashPassword}
export {verifyPassword as verifyPassword}
