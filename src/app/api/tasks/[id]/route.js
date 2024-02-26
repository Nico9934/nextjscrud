import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return error.message;
  }
};

export const PUT = async (req, { params }) => {
  const { title, description } = await req.json();

  try {
    const updateTask = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: title || req.body.title,
        description: description || req.body.description,
      },
    });
    return NextResponse.json(updateTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(`Tarea ${params.id} eliminada`);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
