import { CookieSettingsLink } from "@/components/Consent";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Cookie Policy", description: "How the Anovate System website uses cookies and similar technologies.", path: "/cookies", noindex: true });

export default function Cookies() {
  return (
    <LegalPage title="Cookie Policy" path="/cookies" updated={null}>
      <p>This website is designed to work without non-essential cookies.</p>
      <h2>Essential storage</h2>
      <p>If analytics is enabled on this site, we store your cookie choice in your browser&apos;s local storage so we don&apos;t ask again on every visit.</p>
      <h2>Analytics cookies</h2>
      <p>Analytics cookies (for example, via Google Tag Manager) are only set if analytics is enabled for this site <strong>and</strong> you choose &quot;Accept analytics&quot;. If you decline, no analytics scripts are loaded.</p>
      <h2>Demo scheduling (Calendly)</h2>
      <p>Our inventory demo scheduler is provided by Calendly. Nothing from Calendly loads until you click &quot;Choose a time&quot;. Once loaded, Calendly may set its own cookies, as described in Calendly&apos;s privacy and cookie notices.</p>
      <h2>Changing your choice</h2>
      <p>You can change your choice at any time using the cookie preferences link in the footer. <CookieSettingsLink className="font-semibold text-mint-ink underline" /></p>
    </LegalPage>
  );
}
