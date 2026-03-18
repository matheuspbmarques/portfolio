"use client";

import Image from "next/image";
import CustomInput from "../ui/CustomInput";
import CustomTextArea from "../ui/CustomTextArea";
import fonts from "@/configs/fonts";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  return (
    <section id={id} className="bg-slate-800">
      <div className="mx-auto flex flex-col px-6 py-8 gap-4 max-w-5xl">
        <h2
          className={`${fonts.kanitSmallTitle.className} text-slate-100 text-2xl`}
        >
          Contate-me
        </h2>
        <div className="flex gap-8">
          <div className="hidden sm:flex flex-1">
            <Image
              alt="Ilustração de e-mail"
              src={"/assets/svgs/illustrations/email.svg"}
              width={6 * 64}
              height={6 * 64}
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              const subject = formData.get("subject");
              const message = formData.get("message");

              location.replace(
                `mailto:matheuspbmarques@hotmail.com?subject=${subject}&body=${message}`,
              );
            }}
            action={"sendEmail(this)"}
            className={`flex-1 flex flex-col ${fonts.kanitText.className} text-slate-100 gap-2`}
          >
            <CustomInput
              label="Título"
              placeholder="Informe o título da sua mensagem"
              id="subject"
              type="text"
              name="subject"
            />
            <CustomTextArea
              label="Mensagem"
              placeholder="Deixe a sua mensagem aqui"
              id="message"
              name="message"
            />
            <button
              type="submit"
              className="custom-gradient rounded-lg p-2 text-center w-full"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
