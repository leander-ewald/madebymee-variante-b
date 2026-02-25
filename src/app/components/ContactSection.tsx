"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ref = useScrollAnimation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) return;

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="kontakt" ref={ref}>
      <div className="container-custom">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="fade-up mb-4">Kontakt</h2>
            <form className="contact-form fade-up stagger-1" onSubmit={handleSubmit}>
              <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="E-Mail"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Nachricht"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary-custom"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sende..." : "Absenden"}
                <i className="bi bi-arrow-right" />
              </button>
              {status === "sent" && (
                <p className="mt-3" style={{ color: "#5aaad7", opacity: 1 }}>
                  Nachricht gesendet! Wir melden uns bei dir.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3" style={{ color: "#cf2e2e", opacity: 1 }}>
                  Fehler beim Senden. Bitte versuche es erneut.
                </p>
              )}
            </form>
          </div>
          <div className="col-lg-6">
            <div className="contact-image fade-up stagger-2">
              <Image
                src="/assets/about-1.png"
                alt="madebymee Team"
                width={777}
                height={971}
                style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
