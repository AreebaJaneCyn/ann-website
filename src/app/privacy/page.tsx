import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "How Anovate System collects, uses and protects personal information.", path: "/privacy", noindex: true });

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated={null}>
      <p>This policy explains how Anovate System (&quot;we&quot;, &quot;us&quot;) handles personal information collected through this website.</p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Inquiry forms:</strong> your name, email address, company or business name, and the details you choose to share about your project, budget, timeline or business.</li>
        <li><strong>Analytics (only with your consent):</strong> if enabled and you accept analytics cookies, information about how you use the site, such as pages visited and device type.</li>
        <li><strong>Demo bookings:</strong> if you book a demo, Calendly collects the details you enter in its scheduler on our behalf.</li>
        <li><strong>Server logs:</strong> standard technical information such as IP address and browser type, used to keep the site secure and working.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to your inquiry and discuss our services or products with you.</li>
        <li>To prevent spam and abuse of our forms.</li>
        <li>With consent, to understand and improve how the website is used.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We do not sell personal information. We use service providers to host this website and deliver inquiry messages to our team. They process data on our behalf only. [List providers once confirmed, e.g. hosting, email delivery, analytics.]</p>
      <h2>Retention</h2>
      <p>[Retention period to be confirmed.] We keep inquiry information only for as long as needed to respond and manage any resulting relationship.</p>
      <h2>Your rights</h2>
      <p>Depending on where you live, you may have rights to access, correct or delete your personal information, or to object to certain processing. To make a request, email info@anovatesystem.com.</p>
      <h2>Contact</h2>
      <p>[Registered company name, address and privacy contact to be confirmed.]</p>
    </LegalPage>
  );
}
