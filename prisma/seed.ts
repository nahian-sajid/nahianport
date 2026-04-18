import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_SEED_EMAIL ?? "admin@example.com";
  const password = process.env.ADMIN_SEED_PASSWORD ?? "Admin123!";
  const displayName = "Admin";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { email, passwordHash, displayName, role: Role.ADMIN },
    });
  }

  const ch = await prisma.channel.findFirst();
  if (!ch) {
    const admin = await prisma.user.findUnique({ where: { email } });
    if (admin) {
      await prisma.channel.create({
        data: {
          name: "general",
          description: "General programming questions",
          createdBy: admin.id,
          posts: {
            create: [
              {
                authorId: admin.id,
                title: "Welcome",
                body: "Post your questions here.",
              },
            ],
          },
        },
      });
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
