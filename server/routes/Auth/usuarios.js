import express from "express";
import bcrypt from "bcrypt";

import Usuario from "../../models/Auth/usuarios.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();
//obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Usuarios" });
  }
});
//obtener usuario por Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Usuario" });
  }
});
//crear nuevo usuario
router.post("/", upload.single("imgusuario"), async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      password,
      nickname,
      telefono,
      descripcion,
    } = req.body;

    // Verificar si se cargó una imagen
    let imagen = null;
    if (req.file) {
      imagen = req.file.path;
    }

    // Realizar el hashing de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = {
      nombre,
      apellido,
      email,
      password: hashedPassword,
      imgusuario: imagen,
      nickname,
      telefono,
      descripcion,
      // otros campos del usuario
    };

    // Crear el usuario en la base de datos
    const usuarioCreado = await Usuario.create(nuevoUsuario);

    res.status(201).json(usuarioCreado);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Ocurrió un error al crear el usuario" });
  }
});

//para actualizar el usuario
router.put("/:id", upload.single("imgusuario"), async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      password,
      nickname,
      telefono,
      descripcion,
    } = req.body;

    // Verificar si se cargó una imagen
    let imagen = null;
    if (req.file) {
      imagen = req.file.path;
    }

    // Obtener el usuario existente por su ID
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizar los campos del usuario
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.email = email;
    usuario.nickname = nickname;
    usuario.telefono = telefono;
    usuario.descripcion = descripcion;

    // Actualizar la imagen solo si se cargó una nueva
    if (imagen) {
      usuario.imgusuario = imagen;
    }

    // Actualizar la contraseña solo si se proporcionó una nueva
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      usuario.password = hashedPassword;
    }

    // Guardar los cambios en la base de datos
    const usuarioActualizado = await usuario.save();

    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al actualizar el usuario" });
  }
});

export default router;
