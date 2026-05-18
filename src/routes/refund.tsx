import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Islamic Educational Board" },
      { name: "description", content: "Refund and cancellation policy of the Islamic Educational Board." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legal</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary text-balance max-w-4xl">
          Refund Policy
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="prose prose-blue max-w-3xl text-muted-foreground">
          <h2>1. General Refund Guidelines</h2>
          <p>
            The Islamic Educational Board strives to ensure complete satisfaction with our educational materials, publications, and services. If you are not entirely satisfied with your purchase, we're here to help.
          </p>

          <h2>2. Physical Publications</h2>
          <p>
            For textbooks and other physical publications purchased directly from us:
          </p>
          <ul>
            <li>You have 14 calendar days to return an item from the date you received it.</li>
            <li>To be eligible for a return, your item must be unused and in the same condition that you received it.</li>
            <li>Your item must be in the original packaging and needs to have the receipt or proof of purchase.</li>
          </ul>

          <h2>3. Digital Products and Services</h2>
          <p>
            Due to the nature of digital goods, we generally do not offer refunds on digital downloads, online courses, or digital affiliations once the order is confirmed and access is granted. If you experience technical issues accessing your purchase, please contact our support team.
          </p>

          <h2>4. Affiliation and Exam Fees</h2>
          <p>
            Fees paid for madrasa affiliation or student examinations are generally non-refundable. However, in the event of double payment or accidental overcharge, a full refund for the excess amount will be processed upon verification.
          </p>

          <h2>5. Processing Refunds</h2>
          <p>
            Once we receive your item or refund request, we will inspect it and notify you that we have received your returned item or request. We will immediately notify you on the status of your refund after inspecting the request. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
          </p>

          <h2>6. Shipping Costs</h2>
          <p>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions on how to return your item to us, contact us at madrasaalhind@gmail.com or call us at +91-495-2772840.
          </p>

          <p className="mt-8 pt-8 border-t border-border/60 text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
