import Link from "next/link"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { BlobBackground } from "../components/blob-background"
import { DecorativeCurl } from "../components/decorative-curl"

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        <PageHeader
          title="Privacy Policy"
          description="Learn how we collect, use, and protect your personal information."
          gradient
        />

        <div className="prose max-w-3xl mx-auto">
          <p className="text-muted-foreground">Last Updated: March 15, 2025</p>

          <h2>Introduction</h2>
          <p>
            GreenHope ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website, use our services, or
            interact with us in any way.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we collect may include:</p>

          <h3>Personal Data</h3>
          <p>
            When you donate, volunteer, sign up for our newsletter, or otherwise interact with us, we may collect
            personally identifiable information, such as your:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
            <li>Donation information</li>
            <li>Volunteer preferences</li>
          </ul>

          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access our website, such as your IP address, browser
            type, operating system, access times, and the pages you have viewed.
          </p>

          <h3>Financial Data</h3>
          <p>
            Financial information, such as data related to your payment method (e.g., credit card number, expiration
            date) when you donate to our organization. We store only very limited financial information that we need to
            process donations. All payment processing is handled by secure third-party payment processors.
          </p>

          <h2>Use of Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including to:</p>
          <ul>
            <li>Process donations and provide receipts</li>
            <li>Communicate with you about our programs, events, and impact</li>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Administer volunteer programs and opportunities</li>
            <li>Send newsletters and other communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer service, and marketing
            assistance.
          </p>

          <h3>With Your Consent</h3>
          <p>We may disclose your personal information for any other purpose with your consent.</p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Your Rights</h2>
          <p>You have certain rights regarding your personal information:</p>
          <ul>
            <li>The right to access the personal information we have about you</li>
            <li>The right to request that we correct any personal information we have about you</li>
            <li>The right to request that we delete any personal information we have about you</li>
            <li>The right to opt out of communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2>Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware
            of any data we have collected from children under age 13, please contact us using the information provided
            in the "Contact Us" section below.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you
            to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <address className="not-italic">
            GreenHope
            <br />
            123 Hope Street
            <br />
            New York, NY 10001
            <br />
            Email: privacy@greenhope.org
            <br />
            Phone: (123) 456-7890
          </address>

          <div className="mt-8 border-t pt-6">
            <p>
              <Link href="/terms-of-service" className="text-primary hover:underline">
                View our Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

