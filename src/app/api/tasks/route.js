import { prisma } from "@/app/libs/prisma";

const { NextResponse } = require("next/server");

export const GET = async () => {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
};

export const POST = async (req) => {
  const { title, description } = await req.json();

  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
};
