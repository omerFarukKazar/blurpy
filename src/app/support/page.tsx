import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Support | Blurpy",
  description: "Get help with Blurpy.",
};

export default function Support() {
  return (
    <LegalPage title="Support">
      <p>
        Questions, bugs or feedback: write to{" "}
        <a href="mailto:hello@blurpy.app">hello@blurpy.app</a>. We reply as
        soon as we can.
      </p>

      <h2>Common questions</h2>
      <p>
        <strong>I deleted a photo by mistake.</strong> Open Photos, then
        Albums, then Recently Deleted. Photos stay there for about 30 days.
      </p>
      <p>
        <strong>How do I restore my subscription?</strong> In Blurpy, open the
        paywall and tap Restore Purchases.
      </p>
      <p>
        <strong>How do I cancel?</strong> Open iOS Settings, tap your name,
        then Subscriptions, and choose Blurpy.
      </p>
      <p>
        <strong>Does Blurpy upload my photos?</strong> No. See the{" "}
        <a href="/privacy/">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
