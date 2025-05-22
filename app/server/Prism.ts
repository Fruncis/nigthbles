import {  PrismaClient } from './generated/prisma/client.js'

const prisma = new PrismaClient();

async function main() {
  
  await prisma.users.create({
    data: {

      full_name: 'Alice',
      email: 'alice@gmail.com',
      phone_number: "33542224",
      password_hash: "SHFSJC@xc",
    },
  })
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
  return prisma;
}



export default main;