import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "welcome to students and instructors server",
  });
});

//we want to get all the students

app.get("/students", async (req, res) => {
  const students = await prisma.student.findMany();

  res.send({
    success: true,
    students,
  });
});

//we want to just get one student

app.get("/students/:studentid", async (req, res) => {
  const { studentid } = req.params;
  const student = await prisma.student.findUnique({
    where: { id: studentid },
  });
  if (!student) {
    return res.send({
      success: false,
      message: "no student with the given id exist",
    });
  }
  res.send({
    success: true,
    student,
  });
});

//update the name of a student

app.put("/students/:studentid", async (req, res) => {
  const { studentid } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.send({
      success: false,
      message: "name wasnt included in ur request",
    });
  }

  try {
    const student = await prisma.student.update({
      where: { id: studentid },
      data: { name },
    });

    res.send({
      success: true,
      student,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get / instructors

app.get("/instructors", async (req, res) => {
  const instructors = await prisma.instructor.findMany({
    include: { student: true },
  });

  res.send({
    success: true,
    instructors,
  });
});

app.use((error, req, res, next) => {
  res.send({
    success: false,
    message: error.message,
  });
});

app.use((req, res) => {
  res.send({
    success: false,
    message: "no route found",
  });
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
