export default function TermsOfService() {
  return (
    <section className="p-5 bg-[#060010]  space-y-10">
      <div className="flex flex-col gap-3 md:gap-2 text-start md:text-center">
        <h2 className="text-white text-[36px] md:text-[56px] font-semibold tracking-tighter ">
          TERMS OF SERVICE
        </h2>
        <p className="text-gray-500 text-md md:text-lg">
          Effective as of November 14, 2025
        </p>
      </div>
      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">Introduction</h2>
        <p className="text-lg leading-relaxed font-medium">
          Welcome to KimChat. These Terms of Service (&quote;Terms&quote;)
          govern your use of KimChat&apos;s messaging services, website, mobile
          app(COMING SOON), and related services (collectively, the
          &quote;Service&quote;). <br /> By using KimChat, you agree to these
          Term. If you don&apos;t agree, please don&apos;t use our service.{" "}
          <br /> Contact:{" "}
          <a href="mailto:KimChat@gmail.com" className="hover:underline">
            KimChat@gmail.com
          </a>
        </p>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-lg leading-relaxed font-medium">
          By accessing or using KimChat, you confirm that:
        </p>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>You have read and understood these Terms</li>
          <li>You agree to be bound by these Terms and our Privacy Policy</li>
          <li>You meet the eligibility requirements below</li>
          <li>You have the legal capacity to enter into a binding agreement</li>
        </ul>
        <p className="text-lg pt-4">
          These Terms constitute a legally binding agreement between you and
          KimChat.
        </p>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          2. Account Registration and Security
        </h2>
        <div className="text-lg  font-medium">
          <p>Creating an Account</p>
          To use KimChat, you must:
        </div>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>Provide a valid email address</li>
          <li>Create a secure password</li>
          <li>Provide accurate and complete information</li>
          <li>Be a real person (no bots or automated accounts)</li>
        </ul>

        <div className="text-lg mt-4">
          <p>
            <strong>Account Security</strong> - Your Responsibilities You are
            responsible for:
          </p>
          <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
            <li>
              <strong>Keeping your password secure</strong> - Don&apos;t share
              it with anyone
            </li>
            <li>
              <strong>All activity under your account</strong> - Even if someone
              else uses it
            </li>
            <li>
              <strong>Maintaining accurate account information</strong> - Update
              it when things change
            </li>
            <li>
              <strong>Notifying us immediately </strong>of unauthorized access
              or security breaches
            </li>
          </ul>

          <p className="pt-4">We recommend:</p>
          <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
            <li>
              Use a strong, unique password (mix of letters, numbers, symbols)
            </li>
            <li>Log out on shared devices</li>
          </ul>

          <p className="pt-4 pb-1">Account Termination by You</p>
          <p>
            You can delete your account anytime through the app settings. When
            you delete your account:
          </p>

          <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
            <li>All your data will be permanently deleted within 30 days</li>
            <li>You&apos;ll lose access to all messages and content</li>
            <li>This action cannot be undone</li>
          </ul>
        </div>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          3. Acceptable Use Policy
        </h2>
        <p className="text-lg leading-relaxed font-medium pb-3">
          KimChat is for lawful, respectful communication. You agree to use the
          Service responsibly.
        </p>
        <p className="text-lg ">Prohibited Activities</p>
        <p>
          You <strong>may NOT</strong> use KimChat to:
        </p>
        <h3 className="font-bold mt-4">Harassment & Abuse</h3>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>Harass, threaten, intimidate, or bully others</li>
          <li>
            Stalk or repeatedly contact someone who doesn&apos;t want contact
          </li>
          <li>
            Send hate speech or promote violence against individuals or groups
          </li>
        </ul>

        <h3 className="font-bold mt-4">Spam & Abuse</h3>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>Send unsolicited bulk messages (spam)</li>
          <li>Engage in commercial spam or unauthorized advertising</li>
          <li>Use automated systems (bots) without permission</li>
          <li>Create multiple accounts to evade bans</li>
        </ul>

        <h3 className="font-bold mt-4">Service Abuse</h3>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>Attempt to hack, disrupt, or damage the Service</li>
          <li>Scrape or collect user data without permission</li>
          <li>Reverse engineer or decompile our software</li>
          <li>Bypass security measures or access restrictions</li>
          <li>Overload our systems or interfere with other users access</li>
        </ul>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">4. Your Content</h2>
        <p className="text-lg  font-medium">We use collected information to:</p>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>You own your content (messages, photos, files, etc.)</li>
          <li>You&apos;re responsible for what you share</li>
          <li>
            You grant us a license to transmit and store your encrypted content
            to operate the Service
          </li>
          <li>We can&apos;t read your encrypted messages</li>
        </ul>

        <p className="text-lg pt-3">
          <strong>Important: </strong> Recipients can screenshot, save, or
          forward your messages. Encryption protects messages in transit, not
          what recipients do with them.
        </p>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          5. Privacy & Security
        </h2>
        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>All messages are end-to-end encrypted</li>
          <li>
            We can&apos;t read your message content or recover lost messages
          </li>
          <li>See our Privacy Policy for details</li>
          <li>You&apos;re responsible for securing your device</li>
          <li>Not for emergencies (call 911 for emergencies)</li>
        </ul>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          6. Intellectual Property
        </h2>

        <ul className="list-disc px-5 pt-2 text-lg font-medium  space-y-2">
          <li>KimChat owns all rights to our software, logo, and trademarks</li>
          <li>Don&apos;t copy, modify, or reverse engineer our Service</li>
          <li>Don&apos;t use our trademarks without permission</li>
          <li>Comply with legal obligations (when required by law)</li>
        </ul>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">7. Indemnification</h2>
        <p className="text-lg  ">
          You agree to defend us against claims arising from your use of the
          Service, violation of these Terms, or your content/conduct.
        </p>
      </div>

      <div className="text-white text-start">
        <h2 className="text-[25px] font-semibold pb-3">
          10. Changes to This Privacy Policy
        </h2>
        <p className="text-lg  font-medium">
          We may update this policy. When we make significant changes:
        </p>
        <ul className="list-disc px-5 pt-2 text-lg font-medium pb-3  space-y-2">
          <li>We&apos;ll email you at your registered address</li>
          <li>We&apos;ll display a notice in the app</li>
          <li>We&apos;ll update the &quot;Last Updated&quot; date</li>
        </ul>
        <p className="text-lg">
          Continued use after changes means you accept the updated policy. If
          you don&apos;t agree, delete your account before changes take effect.
        </p>
      </div>

      <div className="text-white text-start mb-20 ">
        <h2 className="text-[25px] font-semibold pb-3">
          11. General & Contact
        </h2>
        <p className="text-lg  font-medium">General Provisions</p>

        <ul className="list-disc px-5 pt-2 text-lg font-medium pb-3  space-y-2">
          <li>These Terms and our Privacy Policy are the entire agreement</li>
          <li>If any provision is invalid, the rest remains in effect</li>
          <li>Notices sent to your registered email</li>
        </ul>

        <p className="text-lg  font-medium">Reporting Issues</p>

        <ul className="list-disc px-5 pt-2 text-lg font-medium pb-3  space-y-2">
          <li>
            <strong>Illegal content</strong>:{" "}
            <a href="mailto:legal@kimchat.com" className="hover:underline">
              legal@kimchat.com
            </a>
          </li>
          <li>
            <strong>Copyright</strong>:{" "}
            <a href="mailto:dmca@kimchat.com" className="hover:underline">
              dmca@kimchat.com
            </a>
          </li>
          <li>
            <strong>Abuse</strong>:{" "}
            <a href="mailto:abuse@kimchat.com" className="hover:underline">
              abuse@kimchat.com
            </a>
          </li>
          <li>
            <strong>Security</strong>:{" "}
            <a href="mailto:security@kimchat.com" className="hover:underline">
              security@kimchat.com
            </a>
          </li>
        </ul>

        <h4 className="text-lg">Contact Us</h4>
        <p className="text-lg">
          Questions? Email{" "}
          <a href="mailto:legal@kimchat.com" className="hover:underline">
            legal@kimchat.com
          </a>{" "}
          (response within 5 business days)
        </p>
      </div>
    </section>
  );
}
