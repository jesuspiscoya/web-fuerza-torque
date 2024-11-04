import { validateReCaptcha } from "@/app/lib/middleware";

export async function POST(req) {
  const { captchaValue } = await req.json();

  // Validar reCAPTCHA
  const captchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: captchaValue,
      }),
    }
  );

  const captchaData = await captchaResponse.json();

  if (captchaData.success) {
    return new Response(JSON.stringify({ message: "Usuario validado!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return validateReCaptcha();
}

export async function GET(req) {
  return methodNotAllowed(req);
}
