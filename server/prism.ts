import {  PrismaClient } from './generated/prisma/client.js'

const prisma = new PrismaClient();

async function main() {
  
  await prisma.users.create({
    data: {

      full_name: 'Alice',
      email: 'alice@prisma.io',
      phone_number: "33542224",
      password_hash: "asfasfasfa",
    },
  })
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })