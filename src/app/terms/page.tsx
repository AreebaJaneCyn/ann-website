import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms of Service", description: "Terms governing use of the Anovate Systems website.", path: "/terms", noindex: true });

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated={null}>
      <p>These terms govern your use of this website. Services and software subscriptions are provided under separate agreements, which take precedence over these terms for those services.</p>
      <h2>Use of the website</h2>
      <p>You may use this website for lawful purposes, to learn about Anovate Systems and to contact us. You must not attempt to disrupt the site, access it without authorisation or misuse its forms.</p>
      <h2>Information on this site</h2>
      <p>We aim to keep information accurate and current, but website content is provided for general information and does not form a contract or offer. Product features, plans and pricing are confirmed in your subscription or service agreement.</p>
      <h2>Intellectual property</h2>
      <p>The Anovate Systems name, logo and website content belong to Anovate Systems unless otherwise stated, and may not be reused without permission.</p>
      <h2>Liability</h2>
      <p>[Limitation of liability wording to be provided by legal adviser.]</p>
      <h2>Governing law</h2>
      <p>[Governing law and jurisdiction to be confirmed.]</p>
    </LegalPage>
  );
}
