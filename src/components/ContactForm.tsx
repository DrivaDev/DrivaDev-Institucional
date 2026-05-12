"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.nombre,
          from_email: form.email,
          message: form.mensaje,
          to_email: "driva.devv@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Formulario de contacto"
      noValidate
    >
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-white/70 mb-1.5">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-principal focus:ring-2 focus:ring-principal/20 transition"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-principal focus:ring-2 focus:ring-principal/20 transition"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-white/70 mb-1.5">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Contanos sobre tu proyecto o idea..."
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-principal focus:ring-2 focus:ring-principal/20 transition resize-none"
          aria-required="true"
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div
          role="alert"
          className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          ¡Mensaje enviado! Te contactamos en menos de 24 horas.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hubo un problema al enviar el mensaje. Intentá por WhatsApp o email directamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>
    </form>
  );
}
