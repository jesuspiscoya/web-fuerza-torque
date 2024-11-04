export const methodNotAllowed = (req) => {
  return new Response(
    JSON.stringify({ message: `Method ${req.method} Not Allowed.` }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const validateForm = () => {
  return new Response(
    JSON.stringify({
      message: "Bad request Not found one or more parameters.",
    }),
    {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const validateReCaptcha = () => {
  return new Response(
    JSON.stringify({ message: "Error de verificación de reCAPTCHA." }),
    {
      status: 400,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const errorSend = (error) => {
  return new Response(
    JSON.stringify({ message: `Error al enviar el correo: ${error.message}` }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
