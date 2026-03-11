import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { MeshGradientBackground } from '../components/MeshGradientBackground';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function Section({ number, title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 border-b border-gray-200/60 last:border-0"
    >
      <div className="flex gap-6 items-baseline mb-4">
        <span className="text-sm text-indigo-500 tabular-nums shrink-0 w-6">{number}</span>
        <h2 className="text-xl text-gray-900">{title}</h2>
      </div>
      <div className="ml-12 text-gray-600 leading-relaxed space-y-3">{children}</div>
    </motion.section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPolicy() {
  return (
    <MeshGradientBackground>
      {/* Header */}
      <header className="sticky top-0 z-10 px-6 py-4 backdrop-blur-md bg-white/30 border-b border-white/40">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-lg text-gray-900">Labora</span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm text-indigo-500 uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-5xl text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Effective Date: 9 August 2025</p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60"
          >
            <p className="text-gray-700 leading-relaxed">
              Labora ("we," "our," or "us") respects your privacy. This Privacy Policy explains how
              we handle information when you use our mobile application ("the App").
            </p>
          </motion.div>

          {/* Sections */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 px-8 py-2 divide-y divide-gray-200/60">
            <Section number="1" title="Information We Collect">
              <p className="p-4 rounded-xl bg-green-50/70 border border-green-100 text-green-800">
                We do <strong>not</strong> collect your name, email address, or any other personally
                identifiable information.
              </p>
              <p>
                The App stores your contraction data and settings{' '}
                <strong>locally on your device</strong>. This information is never transmitted to us
                or any third party, except as described below under "Analytics."
              </p>
            </Section>

            <Section number="2" title="Analytics">
              <p>
                We use <strong>Mixpanel</strong> to collect anonymous usage statistics, such as
                which features are used most often.
              </p>
              <ul className="space-y-2 list-none">
                <Bullet>This helps us improve the App's performance and user experience.</Bullet>
                <Bullet>We do not send any personal or health-related data to Mixpanel.</Bullet>
                <Bullet>Data collected is not linked to your identity.</Bullet>
              </ul>
            </Section>

            <Section number="3" title="Notifications">
              <p>
                Notifications are generated and managed locally on your device based on your chosen
                settings.
              </p>
            </Section>

            <Section number="4" title="Data Sharing">
              <p className="p-4 rounded-xl bg-green-50/70 border border-green-100 text-green-800">
                We do <strong>not</strong> sell, rent, or share your data with any third parties.
              </p>
            </Section>

            <Section number="5" title="Data Security">
              <p>
                Because your contraction data is stored locally on your device, its security depends
                on your device's own security measures, such as passcode protection or biometric
                authentication.
              </p>
            </Section>

            <Section number="6" title="Your Rights">
              <p>
                If you are located in Switzerland or the European Union, you have rights under
                applicable data protection laws, including the right to:
              </p>
              <ul className="space-y-2 list-none">
                <Bullet>Access the data stored on your device.</Bullet>
                <Bullet>Delete the app and its local data at any time.</Bullet>
              </ul>
              <p>
                Since we do not store personal data on our servers, requests to access or delete
                data must be managed on your device.
              </p>
            </Section>

            <Section number="7" title="Children's Privacy">
              <p>
                Labora is intended for use by adults. We do not knowingly collect data from children
                under 16.
              </p>
            </Section>

            <Section number="8" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy
                within the App and/or on our website, with a revised "Effective Date."
              </p>
            </Section>

            <Section number="9" title="Contact Us">
              <p>If you have any questions about this Privacy Policy, please contact:</p>
              <address className="not-italic mt-3 p-4 rounded-xl bg-gray-50/70 border border-gray-100 space-y-1">
                <p className="text-gray-800">Panittha Suwannajang</p>
                <p>
                  <a
                    href="mailto:developer@getlabora.app"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    developer@getlabora.app
                  </a>
                </p>
                <p className="text-gray-600">Switzerland</p>
              </address>
            </Section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 mt-8 border-t border-gray-200/50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2026 Labora. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </MeshGradientBackground>
  );
}
