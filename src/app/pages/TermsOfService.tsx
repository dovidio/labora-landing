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

export default function TermsOfService() {
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
            <h1 className="text-5xl text-gray-900 mb-4">Terms of Service</h1>
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
              These Terms of Service ("Terms") govern your use of the Labora mobile application ("the App").
              By downloading or using the App, you agree to these Terms. If you do not agree, do not use the App.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 px-8 py-2 divide-y divide-gray-200/60">
            <Section number="1" title="Purpose of the App">
              <p>
                Labora is designed to help you time and track contractions during pregnancy.
              </p>
              <p className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-800">
                The App is <strong>for informational purposes only</strong> and is{' '}
                <strong>not a substitute for medical advice, diagnosis, or treatment</strong>.
              </p>
              <p>
                Always consult a qualified healthcare professional about any questions or concerns
                you may have regarding your pregnancy or health.
              </p>
            </Section>

            <Section number="2" title="Eligibility">
              <p>You must be at least 16 years old to use the App.</p>
            </Section>

            <Section number="3" title="Use of the App">
              <ul className="space-y-2 list-none">
                {[
                  'You may use the App only for personal, non-commercial purposes.',
                  'You agree not to reverse-engineer, copy, or distribute the App or its content without permission.',
                  'You are responsible for ensuring your device is secure and for maintaining backups of your data.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section number="4" title="Data and Privacy">
              <p>
                Our handling of your information is described in our{' '}
                <Link
                  to="/privacy"
                  className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                By using the App, you agree to the collection and use of information as set out in that policy.
              </p>
            </Section>

            <Section number="5" title="Health Disclaimer">
              <ul className="space-y-2 list-none">
                {[
                  "The App's timing suggestions (including notifications) are based on general guidelines and are not medical recommendations.",
                  'You are responsible for your own health decisions and actions.',
                  'In case of emergency or concerning symptoms, contact a healthcare provider immediately.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section number="6" title="Limitation of Liability">
              <p>To the maximum extent permitted by law:</p>
              <ul className="space-y-2 list-none">
                {[
                  'The App is provided "as is" without warranties of any kind.',
                  'We are not liable for any damages or losses arising from your use of the App, including but not limited to health outcomes, missed medical care, or device issues.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section number="7" title="Modifications to the Terms">
              <p>
                We may update these Terms from time to time. Continued use of the App after updates
                means you accept the revised Terms.
              </p>
            </Section>

            <Section number="8" title="Governing Law">
              <p>
                These Terms are governed by the laws of Switzerland, without regard to conflict of
                law provisions.
              </p>
            </Section>

            <Section number="9" title="Contact Us">
              <p>If you have any questions about these Terms, please contact:</p>
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
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              Privacy Policy
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
