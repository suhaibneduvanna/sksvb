import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Islamic Educational Board" },
      { name: "description", content: "Privacy policy of the Islamic Educational Board." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legal</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary text-balance max-w-4xl">
          Privacy Policy
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="prose prose-blue max-w-3xl text-muted-foreground">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when registering at the website, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and the website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To send administrative information to you.</li>
            <li>To protect our website.</li>
            <li>To enforce our terms, conditions, and policies.</li>
            <li>To respond to legal requests and prevent harm.</li>
          </ul>

          <h2>3. Will Your Information be Shared with Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
          </p>

          <h2>4. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          <h2>5. How Do We Keep Your Information Safe?</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>

          <h2>6. What Are Your Privacy Rights?</h2>
          <p>
            In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
          </p>

          <p className="mt-8 pt-8 border-t border-border/60 text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
