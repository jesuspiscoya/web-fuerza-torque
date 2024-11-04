import {
  errorSend,
  methodNotAllowed,
  validateForm,
} from "@/app/lib/middleware";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, company, subject, message } = await req.json();

  if (!name || !email || !phone || !company || !subject || !message) {
    return validateForm();
  }

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Formulario de Contacto</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background-color: #ffffff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header img {
          max-width: 100px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          padding: 10px;
          border: 1px solid #ddd;
        }
        th {
          background-color: #007bff; /* Azul */
          color: #ffffff;
        }
        td {
          background-color: #ffffe0; /* Amarillo claro */
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #888888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="" alt="Logo de la Empresa">
          <h2>Nuevo Mensaje de Contacto</h2>
        </div>
        <table>
          <tr>
            <th>Nombre</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Teléfono</th>
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Empresa</th>
            <td>${company}</td>
          </tr>
          <tr>
            <th>Mensaje</th>
            <td>${message}</td>
          </tr>
        </table>
        <div class="footer">
          <strong>FUERZA & TORQUE COMPANY E.I.R.L. RUC 20606757311</strong>
        </div>
      </div>
    </body>
    </html>
    `;

  // Configurar el transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Envía el correo
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: `${subject} - ${name} (${email})`,
      html: htmlTemplate,
    });
    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente." }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return errorSend(error);
  }
}

export async function GET(req) {
  return methodNotAllowed(req);
}
