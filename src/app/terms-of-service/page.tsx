import Link from "next/link"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { BlobBackground } from "../components/blob-background"
import { DecorativeCurl } from "../components/decorative-curl"

export default function TermsOfServicePage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        <PageHeader
          title="Terms of Service"
          description="Please read these terms carefully before using our website and services."
          gradient
        />

        <div className="prose max-w-3xl mx-auto">
          <p className="text-muted-foreground">Last Updated: March 15, 2025</p>

          <h2>Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you and GreenHope ("we," "us," or
            "our"), concerning your access to and use of the GreenHope website and services.
          </p>
          <p>
            You agree that by accessing the website and services, you have read, understood, and agree to be bound by
            all of these Terms of Service. If you do not agree with all of these terms, you are prohibited from using
            the website and services and must discontinue use immediately.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the website and services are our proprietary property and all source code,
            databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the
            website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the
            "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights.
          </p>
          <p>
            The Content and Marks are provided on the website "AS IS" for your information and personal use only. Except
            as expressly provided in these Terms of Service, no part of the website or services and no Content or Marks
            may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded,
            translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>

          <h2>User Representations</h2>
          <p>By using the website and services, you represent and warrant that:</p>
          <ol>
            <li>All registration information you submit will be true, accurate, current, and complete;</li>
            <li>
              You will maintain the accuracy of such information and promptly update such registration information as
              necessary;
            </li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
            <li>You are not a minor in the jurisdiction in which you reside;</li>
            <li>
              You will not access the website or services through automated or non-human means, whether through a bot,
              script, or otherwise;
            </li>
            <li>You will not use the website or services for any illegal or unauthorized purpose;</li>
            <li>Your use of the website or services will not violate any applicable law or regulation.</li>
          </ol>

          <h2>Donations</h2>
          <p>
            When you make a donation through our website, you agree to provide accurate and complete payment
            information. We use secure third-party payment processors to handle all financial transactions. By making a
            donation, you authorize us to charge your payment method for the amount you have specified.
          </p>
          <p>
            All donations are final and non-refundable unless otherwise required by law. If you believe an error has
            occurred in your donation, please contact us immediately.
          </p>

          <h2>User Registration</h2>
          <p>
            You may be required to register with the website to access certain features. You agree to keep your password
            confidential and will be responsible for all use of your account and password. We reserve the right to
            remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username
            is inappropriate, obscene, or otherwise objectionable.
          </p>

          <h2>Prohibited Activities</h2>
          <p>
            You may not access or use the website or services for any purpose other than that for which we make them
            available. The website and services may not be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
          </p>
          <p>As a user of the website or services, you agree not to:</p>
          <ol>
            <li>
              Systematically retrieve data or other content from the website or services to create or compile, directly
              or indirectly, a collection, compilation, database, or directory without written permission from us;
            </li>
            <li>
              Make any unauthorized use of the website or services, including collecting usernames and/or email
              addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses;
            </li>
            <li>Use the website or services to advertise or offer to sell goods and services;</li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related features of the website or services;
            </li>
            <li>Engage in unauthorized framing of or linking to the website;</li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
              information such as user passwords;
            </li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct;</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages;</li>
            <li>
              Interfere with, disrupt, or create an undue burden on the website or the networks or services connected to
              the website;
            </li>
            <li>Attempt to impersonate another user or person or use the username of another user;</li>
            <li>
              Use any information obtained from the website or services in order to harass, abuse, or harm another
              person;
            </li>
            <li>
              Use the website or services as part of any effort to compete with us or otherwise use the website or
              services and/or the Content for any revenue-generating endeavor or commercial enterprise;
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making
              up a part of the website or services;
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of
              the website or services to you;
            </li>
            <li>Delete the copyright or other proprietary rights notice from any Content;</li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material,
              including excessive use of capital letters and spamming, that interferes with any party's uninterrupted
              use and enjoyment of the website or services or modifies, impairs, disrupts, alters, or interferes with
              the use, features, functions, operation, or maintenance of the website or services.
            </li>
          </ol>

          <h2>Submissions</h2>
          <p>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information
            regarding the website or services ("Submissions") provided by you to us are non-confidential and shall
            become our sole property. We shall own exclusive rights, including all intellectual property rights, and
            shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose,
            commercial or otherwise, without acknowledgment or compensation to you.
          </p>

          <h2>Third-Party Websites and Content</h2>
          <p>
            The website may contain links to other websites ("Third-Party Websites") as well as articles, photographs,
            text, graphics, pictures, designs, music, sound, video, information, applications, software, and other
            content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party
            Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness,
            or completeness by us, and we are not responsible for any Third-Party Websites accessed through the website
            or any Third-Party Content posted on, available through, or installed from the website.
          </p>

          <h2>Disclaimer</h2>
          <p>
            THE WEBSITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE
            WEBSITE AND SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
            WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND SERVICES AND YOUR USE THEREOF.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
            DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT,
            LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES, EVEN IF WE
            HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our
            respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim,
            or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out
            of: (1) your Contributions; (2) use of the website or services; (3) breach of these Terms of Service; (4)
            any breach of your representations and warranties set forth in these Terms of Service; (5) your violation of
            the rights of a third party, including but not limited to intellectual property rights; or (6) any overt
            harmful act toward any other user of the website or services with whom you connected via the website or
            services.
          </p>

          <h2>Term and Termination</h2>
          <p>
            These Terms of Service shall remain in full force and effect while you use the website or services. WITHOUT
            LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE WEBSITE OR SERVICES TO ANY PERSON FOR ANY REASON
            OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
            CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
          </p>

          <h2>Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the website or services at any time or for
            any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or
            part of the website or services without notice at any time.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service and your use of the website and services are governed by and construed in accordance
            with the laws of the State of New York applicable to agreements made and to be entirely performed within the
            State of New York, without regard to its conflict of law principles.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about these Terms of Service, please contact us at:</p>
          <address className="not-italic">
            GreenHope
            <br />
            123 Hope Street
            <br />
            New York, NY 10001
            <br />
            Email: legal@greenhope.org
            <br />
            Phone: (123) 456-7890
          </address>

          <div className="mt-8 border-t pt-6">
            <p>
              <Link href="/privacy-policy" className="text-primary hover:underline">
                View our Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

