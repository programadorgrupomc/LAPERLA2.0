import mongoose from "mongoose";

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Conexión OK✨✨");
  } catch (error) {
    console.log("Error de conexión: " + error);
  }
}

connectToMongo();
