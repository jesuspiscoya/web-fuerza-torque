import { rubik } from "@/app/fonts";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es requerido.";
    if (!formData.email) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!formData.phone) newErrors.phone = "El teléfono es requerido.";
    if (!formData.company) newErrors.company = "La empresa es requerida.";
    if (!formData.subject) newErrors.subject = "El asunto es requerido.";
    if (!formData.message) newErrors.message = "El mensaje es requerido.";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
    } else if (!captchaValue) {
      alert("Por favor, completa el reCAPTCHA");
      setLoading(false);
    } else {
      const resCaptcha = await fetch("/api/recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ captchaValue }),
      });

      const dataCaptcha = await resCaptcha.json();

      if (!resCaptcha.ok) {
        alert(dataCaptcha.message);
        recaptchaRef.current.reset();
        setCaptchaValue(null);
        setLoading(false);
        return;
      }

      const resForm = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!resForm.ok) {
        alert("Error al enviar el formulario");
        recaptchaRef.current.reset();
        setCaptchaValue(null);
        setLoading(false);
        return;
      }

      setErrors({});
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      const data = await resForm.json();
      alert(data.message);
      recaptchaRef.current.reset();
      setCaptchaValue(null);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg">
      <Input
        maxLength={100}
        minLength={10}
        label="Nombre completo"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        placeholder="Ingrese su nombre completo"
        className="rounded-none focus:!border-t-0 py-3.5 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px] after:-translate-x-[0.1px]",
        }}
        containerProps={{ className: "h-auto" }}
        icon={
          <i
            className="fa-solid fa-user text-blue-gray-100"
            aria-hidden="true"
          ></i>
        }
      />
      {errors.name && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.name}
        </div>
      )}
      <Input
        maxLength={100}
        minLength={10}
        label="Correo electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        placeholder="Ingrese su correo electrónico"
        className="rounded-none focus:!border-t-0 py-3.5 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
        }}
        containerProps={{ className: "h-auto" }}
        icon={
          <i
            className="fas fa-envelope text-blue-gray-100"
            aria-hidden="true"
          ></i>
        }
      />
      {errors.email && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.email}
        </div>
      )}
      <Input
        maxLength={15}
        minLength={9}
        label="Teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={Boolean(errors.phone)}
        placeholder="Ingrese su teléfono"
        className="rounded-none focus:!border-t-0 py-3.5 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
        }}
        containerProps={{ className: "h-auto" }}
        icon={
          <i
            className="fas fa-phone-alt text-blue-gray-100"
            aria-hidden="true"
          ></i>
        }
      />
      {errors.phone && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.phone}
        </div>
      )}
      <Input
        maxLength={100}
        minLength={10}
        label="Empresa"
        name="company"
        value={formData.company}
        onChange={handleChange}
        error={Boolean(errors.company)}
        placeholder="Ingrese su empresa"
        className="rounded-none focus:!border-t-0 py-3.5 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.2px] after:!rounded-none after:-translate-y-[0.2px]",
        }}
        containerProps={{ className: "h-auto" }}
        icon={
          <i
            className="fa-solid fa-building text-blue-gray-100"
            aria-hidden="true"
          ></i>
        }
      />
      {errors.company && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.company}
        </div>
      )}
      <Input
        maxLength={100}
        minLength={10}
        label="Asunto"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={Boolean(errors.subject)}
        placeholder="Ingrese asunto"
        className="rounded-none focus:!border-t-0 py-3.5 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
        }}
        containerProps={{ className: "h-auto" }}
        icon={
          <i
            className="fa-solid fa-marker text-blue-gray-100"
            aria-hidden="true"
          ></i>
        }
      />
      {errors.subject && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.subject}
        </div>
      )}
      <Textarea
        minLength={20}
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={Boolean(errors.message)}
        className="rounded-none focus:!border-t-0 text-white"
        color="light-blue"
        labelProps={{
          className:
            "peer-placeholder-shown:!leading-[4.2] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
        }}
      />
      {errors.message && (
        <div className="flex gap-2 text-sm text-red-500 -mt-3">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
          {errors.message}
        </div>
      )}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={(value) => setCaptchaValue(value)}
      />
      <Button
        variant="gradient"
        className={`flex items-center justify-center text-base gap-3 w-44 mx-auto md:mx-0 duration-500 ${rubik.className} `}
        color="light-blue"
        type="submit"
      >
        {loading ? <Spinner color="amber" className="h-5 w-5" /> : "Enviar"}
        {!loading && <i className="fas fa-paper-plane" aria-hidden="true"></i>}
      </Button>
    </form>
  );
}
