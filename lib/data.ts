import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUsers = async () => {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "admin") redirect("/dashboard");

  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    console.log(err);
  }
};

export const getProductByUser = async () => {
  const session = await auth();

  if (!session || !session.user) redirect("/dashboard");
  const role = session.user.role;

  if (role === "admin") {
    try {
      const product = await prisma.product.findMany({
        include: { user: { select: { name: true } } },
      });
      return product;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const product = await prisma.product.findMany({
        where: { userId: session.user.id },
        include: { user: { select: { name: true } } },
      });
      return product;
    } catch (err) {
      console.log(err);
    }
  }
};
