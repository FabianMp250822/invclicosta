const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configura tu servidor SMTP (Hostinger)
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Servidor SMTP
  port: 465, // Puerto SSL
  secure: true, // Usar SSL
  auth: {
    user: "informacion@invclicosta.info", // Tu correo electrónico
    pass: "F2oP2JE6v^", // Tu contraseña de correo
  },
});

// Función para enviar correos desde Firebase
exports.sendContactEmail = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
  }

  const {name, email, subject, message} = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("Todos los campos son obligatorios.");
  }

  const mailOptions = {
    from: "informacion@invclicosta.info", // Desde tu correo
    to: "informacion@invclicosta.info", // Correo destinatario
    subject: `Nuevo mensaje de contacto: ${subject}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).send("Error al enviar el correo.");
    }
    return res.status(200).send("¡Correo enviado con éxito!");
  });
});
