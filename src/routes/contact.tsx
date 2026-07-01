import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { WindowTitleBar } from "@/components/WindowTitleBar";
import { RetroButton } from "@/components/RetroButton";
import contactMac from "@/assets/contact-mac.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Retro Mac Portfolio" },
      { name: "description", content: "Get in touch — email, LinkedIn, GitHub, Instagram." },
      { property: "og:title", content: "Contact — Retro Mac Portfolio" },
      { property: "og:description", content: "Send a message." },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { Icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Github, label: "GitHub", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <WindowTitleBar title="contact.sys">
        <div className="p-6 md:p-10">
          <h1 className="font-pixel text-2xl uppercase md:text-4xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
            Have a project, a question, or just want to chat about retro computers? Drop a line.
          </p>
        </div>
      </WindowTitleBar>

      <hr className="my-12 border-t-[2px] border-ink" />

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <form
          className="border-[3px] border-ink bg-cream p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {(["Name", "Email"] as const).map((field) => (
            <label key={field} className="mb-5 block">
              <span className="mb-2 block font-pixel text-[10px] uppercase">{field}</span>
              <input
                type={field === "Email" ? "email" : "text"}
                required
                className="block w-full border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
              />
            </label>
          ))}
          <label className="mb-6 block">
            <span className="mb-2 block font-pixel text-[10px] uppercase">Message</span>
            <textarea
              required
              rows={5}
              className="block w-full resize-none border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
            />
          </label>
          <RetroButton type="submit" variant="primary">
            {sent ? "Message Sent" : "Send Message"} <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
          </RetroButton>
        </form>

        <div className="flex flex-col gap-6">
          <WindowTitleBar title="hello.app">
            <div className="bg-cream p-3">
              <img
                src={contactMac}
                alt="Pixel art retro Macintosh displaying 'Let's talk!'"
                width={896}
                height={896}
                loading="lazy"
                className="block h-auto w-full"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </WindowTitleBar>

          <ul className="grid grid-cols-2 gap-3">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-3 border-[3px] border-ink bg-cream px-4 py-3 hover:bg-ink hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center border-[2px] border-current">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="font-pixel text-[10px] uppercase">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
