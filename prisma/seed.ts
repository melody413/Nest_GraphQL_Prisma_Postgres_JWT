import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      email: 'user@gmail.com',
      firstname: 'Oleksandr',
      lastname: 'K',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
      posts: {
        create: {
          title: 'My github account',
          content: 'https://github.com/melody413',
          published: true,
        },
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      firstname: 'Admin',
      lastname: 'Admin',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      posts: {
        create: [
          {
            title: 'Full Stack Engineer roadmap',
            content: 'https://roadmap.sh',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
