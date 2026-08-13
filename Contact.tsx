import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const submit = useServerFn(submitContact);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      setStatus("idle");
      await submit({ data });
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl border-x border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-foreground">
          Start a Project
        </h2>
        <p className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Expect a response within 24 hours.
        </p>

        {status === "success" && (
          <div className="mb-8 flex items-center justify-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
            <CheckCircle2 className="size-4" />
            Message sent successfully. I'll get back to you soon!
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 flex items-center justify-center gap-2 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
            <AlertCircle className="size-4" />
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label className="font-mono text-[10px] uppercase text-muted-foreground">Message</label>
            <textarea
              rows={4}
              {...register("message")}
              className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              placeholder="Describe your project or opportunity..."
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 bg-primary py-5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-foreground disabled:opacity-50"
          >
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            {isSubmitting ? "Transmitting..." : "Transmit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
