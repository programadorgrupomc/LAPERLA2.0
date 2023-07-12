import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { check, validationResult } from "express-validator";

import User from "../models/user.js";

const routerlogin = express.Router();
const saltRounds = 10;

// Configurar el transporte de correo electrónico con nodemailer
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'santosbernuy20@gmail.com',
    pass:'foiypsgazxvuddrs'
  }
});

// Ruta para solicitar recuperación de contraseña
routerlogin.post(
  "/forgot-password",
  [check("email").isEmail().withMessage("Email no válido")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      // Verificar si el usuario existe en la base de datos
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "El usuario no existe" });
      }

      // Generar un código único para la recuperación de contraseña
      const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Guardar el código en el usuario
      user.resetPasswordCode = resetCode;
      await user.save();

      // Enviar el correo electrónico utilizando nodemailer
      await transporter.sendMail({
        from: "Dashboard La Perla",
        to: email,
        subject: "Recuperación de contraseña",
        text: `Tu código de recuperación es: ${resetCode} Ingrese al siguiente link: https://dashboardlaperla.web.app/recreatepass`,
      });

      res.json({
        message:
          "Se ha generado un código de recuperación. Por favor, verifica tu correo electrónico.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ha ocurrido un error " + error });
    }
  }
);
// Ruta para restablecer la contraseña
routerlogin.post("/reset-password", async (req, res) => {
  const { email, code, newPassword } = req.body;

  try {
    // Buscar al usuario en la base de datos por su correo electrónico y código de recuperación
    const user = await User.findOne({
      email,
      resetPasswordCode: code,
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "El código de recuperación no es válido" });
    }

    // Actualizar la contraseña del usuario
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    user.pass = hashedPassword;
    user.resetPasswordCode = null;
    await user.save();

    res.json({ message: "La contraseña se ha restablecido correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
});

routerlogin.get("/get-login", async (req, res) => {
  res.json({ mensaje: "Funciona!" });
});

routerlogin.post("/post-login", async (req, res) => {
  let body = req.body;
  try {
    // Buscamos email en DB
    const usuarioDB = await User.findOne({ email: body.email });
    // Evaluamos si existe el usuario en DB
    if (!usuarioDB) {
      return res.status(400).json({
        mensaje: "ERROR: Usuario y/o Contraseña INVALIDOS(NULL)",
      });
    }
    // Evaluamos la contraseña correcta
    if (!bcrypt.compareSync(body.pass, usuarioDB.pass)) {
      return res.status(400).json({
        mensaje: "ERROR: Usuario y/o Contraseña INVALIDOS",
      });
    }
    // Generar Token
    let token = jwt.sign(
      {
        data: usuarioDB,
      },
      "secret",
      { expiresIn: 60 * 60 * 24 * 30 }
    ); // Expira en 30 días
    // Pasó las validaciones
    return res.json({
      usuarioDB,
      token: token,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default routerlogin;
