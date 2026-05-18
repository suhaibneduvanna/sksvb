import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Islamic Educational Board" },
      { name: "description", content: "Terms and conditions of the Islamic Educational Board." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legal</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary text-balance max-w-4xl">
          Terms and Conditions
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="prose prose-blue max-w-3xl text-muted-foreground">
          <h2>1. Introduction</h2>
          <p>
            Welcome to the Islamic Educational Board (Samastha Kerala Sunni Vidyabhyasa Board). By accessing our website, you agree to these Terms and Conditions. Please read them carefully.
          </p>

          <h2>2. Use of Our Website</h2>
          <p>
            Our website and its content are provided for informational and educational purposes. You agree not to use this website for any unlawful purpose or in any way that might harm, damage, or disparage any other party.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including texts, graphics, logos, images, and software, is the property of the Islamic Educational Board or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2>4. User Content</h2>
          <p>
            Any information or materials you submit to us via the website will be treated as non-confidential and non-proprietary. We reserve the right to use such materials for any purpose without compensation to you.
          </p>

          <h2>5. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your convenience. We do not endorse and are not responsible for the content of any linked website.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            The Islamic Educational Board shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website following any changes signifies your acceptance of the revised terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Calicut, Kerala.
          </p>

          <p className="mt-8 pt-8 border-t border-border/60 text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
