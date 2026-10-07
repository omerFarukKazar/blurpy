import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Blurpy",
  description: "How Blurpy handles your photos and data.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="5 October 2026">
      <p>
        Blurpy helps you clear screenshots and look-alike photos from your
        iPhone. This policy explains what the app does with your data. The
        short version: your photos stay on your phone.
      </p>

      <h2>Who is responsible</h2>
      <p>
        Blurpy is developed by Ömer Faruk Kazar, an individual developer based
        in Türkiye. For this policy he is the data controller. Contact:{" "}
        <a href="mailto:hello@blurpy.app">hello@blurpy.app</a>.
      </p>

      <h2>Your photos</h2>
      <ul>
        <li>
          Blurpy reads your photo library, with your permission, to find
          screenshots and similar photos. All of this analysis happens on your
          device.
        </li>
        <li>
          Photos, their contents and their file details are never uploaded to
          us or to anyone else, and are never used for advertising.
        </li>
        <li>
          When you delete photos, they move to the Recently Deleted album in
          Photos, and iOS asks you to confirm. You can recover them there for
          about 30 days.
        </li>
        <li>
          You can withdraw photo access at any time in iOS Settings, Blurpy,
          Photos.
        </li>
      </ul>

      <h2>Data kept on your device</h2>
      <p>
        Blurpy stores a few things locally so it can work: which photos you
        chose to keep, your daily swipe count, your answers during onboarding,
        your settings, and an index of photo similarity. This data stays on
        your device and is removed when you delete the app. We do not receive
        a copy.
      </p>

      <h2>Subscriptions</h2>
      <ul>
        <li>
          Payments are handled by Apple. We never see your card or Apple
          account details.
        </li>
        <li>
          We use RevenueCat to check whether your subscription is active.
          RevenueCat receives an anonymous app user ID, your purchase receipt,
          and technical data such as your IP address and device type. We do
          not link this to your name or email.
        </li>
        <li>
          See the{" "}
          <a href="https://www.revenuecat.com/privacy/">
            RevenueCat privacy policy
          </a>{" "}
          and{" "}
          <a href="https://www.apple.com/legal/privacy/">
            Apple&apos;s privacy policy
          </a>
          .
        </li>
      </ul>

      <h2>Ads (free version only)</h2>
      <ul>
        <li>
          The free version shows an ad between photos. Subscribers see no ads,
          and the ad system is not started for them.
        </li>
        <li>
          Ads are provided by Google AdMob. When an ad is requested, Google
          may collect your device&apos;s advertising identifier (only if you
          allow tracking), IP address, approximate location, device and app
          information, and how you interact with ads.
        </li>
        <li>
          Google uses this to choose and measure ads and to prevent fraud.
          See{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            how Google uses data from apps that use its services
          </a>
          .
        </li>
        <li>
          Ads are personalised only if you agree. On first use iOS asks
          whether Blurpy may track you across other apps and websites. If you
          are in the European Economic Area, the United Kingdom or
          Switzerland, a consent form from Google also asks for your choice
          first. If you decline, you still see ads, but they are not
          personalised.
        </li>
        <li>
          You can change your choice at any time: in Blurpy, Settings, Privacy
          choices (where shown), and in iOS Settings, Privacy and Security,
          Tracking.
        </li>
      </ul>
      <p>
        Legal basis: your consent for personalised advertising and for the
        use of advertising identifiers.
      </p>

      <h2>Notifications</h2>
      <p>
        If you allow them, Blurpy schedules a reminder at the interval you choose (every 7 or 30 days). It is a local
        notification created on your device. Nothing is sent to a server.
      </p>

      <h2>Analytics</h2>
      <p>
        Blurpy does not currently send usage analytics or crash reports to
        us. If that changes, we will describe it here before the change takes
        effect.
      </p>

      <h2>Retention and transfers</h2>
      <p>
        We run no server that stores your personal data. Data held by Google
        and RevenueCat is kept under their policies and may be processed in
        countries outside yours, including the United States, under the
        safeguards those companies describe.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (including under the GDPR, the UK GDPR,
        Türkiye&apos;s KVKK and California&apos;s CCPA), you may have the
        right to access, correct or delete your personal data, to withdraw
        consent, to object to processing, and to complain to your data
        protection authority. We hold no personal data about you ourselves,
        but write to{" "}
        <a href="mailto:hello@blurpy.app">hello@blurpy.app</a> and we will
        help you reach the right company. We do not sell your personal
        information and we do not use your photos for advertising.
      </p>

      <h2>Children</h2>
      <p>
        Blurpy is not directed at children under 13, and we do not knowingly
        collect their data.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we will update the date above and, for
        material changes, tell you in the app.
      </p>
    </LegalPage>
  );
}
