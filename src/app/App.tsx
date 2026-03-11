import { motion } from 'motion/react';
import { Timer, Activity, Heart, TrendingUp, Apple, Watch, Smartphone } from 'lucide-react';
import { PhoneMockup } from './components/PhoneMockup';
import { GlassMorphicCard } from './components/GlassMorphicCard';
import { StatisticsChart } from './components/StatisticsChart';
import { LaborProgress } from './components/LaborProgress';
import { Link } from 'react-router';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { MeshGradientBackground } from './components/MeshGradientBackground';

export default function App() {
  return (
    <MeshGradientBackground>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-7xl lg:text-8xl mb-6 text-gray-900 tracking-tight">
              The simplest way to track contractions.
            </h1>
            
            <p className="text-2xl lg:text-3xl mb-6 text-gray-700 leading-relaxed">
              Labora helps you time contractions quickly and clearly —
              so you can focus on breathing, not the clock.
            </p>
            
            <p className="text-lg mb-10 text-gray-600 leading-relaxed max-w-xl">
              Start tracking in one tap from your Lock Screen, Apple Watch, or inside the app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Apple className="w-5 h-5" />
                <span className="text-lg">Download on App Store</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Phone mockup with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <PhoneMockup floatingElements>
              <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center p-8">
                {/* Timer UI */}
                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 mb-2">CURRENT CONTRACTION</p>
                  <div className="text-7xl text-gray-900 mb-2 tabular-nums">0:42</div>
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
                
                {/* Breathing circle animation */}
                <motion.div
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 mb-8 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg">Breathe</span>
                  </div>
                </motion.div>
                
                <button className="px-12 py-4 bg-indigo-600 text-white rounded-full text-lg shadow-lg">
                  Stop Timer
                </button>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </section>

      {/* Feature Gallery Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900">
              Designed without distractions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature crafted to help you focus on what matters most
            </p>
          </motion.div>

          {/* Grid of features */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timer Feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassMorphicCard className="p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                  <Timer className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Precise Timing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hospital-grade accuracy with one-tap start and stop. 
                  Every second counted, every pattern tracked.
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="space-y-3">
                    {[
                      { time: '9:45 AM', duration: '52 sec', gap: '3 min' },
                      { time: '9:42 AM', duration: '48 sec', gap: '4 min' },
                      { time: '9:38 AM', duration: '45 sec', gap: '5 min' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-indigo-50 rounded-xl">
                        <span className="text-sm text-gray-600">{item.time}</span>
                        <span className="text-sm text-indigo-600">{item.duration}</span>
                        <span className="text-xs text-gray-500">{item.gap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassMorphicCard>
            </motion.div>

            {/* Breathing Guide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassMorphicCard className="p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Breathing Guide</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gentle animations to help you breathe through contractions. 
                  Stay calm, stay focused.
                </p>
                <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0.4, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center"
                    animate={{
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-indigo-700">Inhale</span>
                  </motion.div>
                </div>
              </GlassMorphicCard>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassMorphicCard className="p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Clear Insights</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Beautiful charts show your contraction patterns. 
                  Share with your care team in seconds.
                </p>
                <div className="bg-white rounded-2xl p-4 shadow-inner">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Duration</span>
                      <span className="text-lg text-indigo-600">48 sec</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Frequency</span>
                      <span className="text-lg text-indigo-600">4 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Tracked</span>
                      <span className="text-lg text-indigo-600">24</span>
                    </div>
                    <div className="mt-4 h-24 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl flex items-end gap-1 p-2">
                      {[30, 45, 40, 55, 50, 60, 65, 58].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-indigo-500 rounded-sm"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassMorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Activity & Integration Section */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900">
                Always in sight, never in the way
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Live Activity shows your contraction timer right on your Lock Screen and Dynamic Island. 
                No need to open the app—just glance and breathe.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 text-gray-900">Lock Screen Integration</h4>
                    <p className="text-gray-600">
                      Your timer stays visible on the Lock Screen, even when your phone is locked.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 text-gray-900">Dynamic Island</h4>
                    <p className="text-gray-600">
                      See real-time updates in the Dynamic Island on iPhone 14 Pro and newer.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Watch className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 text-gray-900">Apple Watch Support</h4>
                    <p className="text-gray-600">
                      Track contractions right from your wrist. Tap to start, raise to view.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719826776338-61af583ee606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWFuJTIwcGhvbmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI3NDAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Woman using Labora app"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay - Live Activity mockup */}
                <div className="absolute top-8 left-8 right-8">
                  <GlassMorphicCard className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Current Contraction</p>
                        <p className="text-3xl text-gray-900 tabular-nums">1:24</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart className="w-8 h-8 text-white" fill="white" />
                        </motion.div>
                      </div>
                    </div>
                  </GlassMorphicCard>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900">
              Reassuring data when you need it most
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clear visualizations help you understand your labor progression
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Statistics Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] overflow-hidden shadow-2xl"
            >
              <StatisticsChart />
            </motion.div>

            {/* Labor Progress */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] overflow-hidden shadow-2xl"
            >
              <LaborProgress />
            </motion.div>
          </div>

          {/* Watch Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669320412360-b4bf692925f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwd29tYW4lMjB3cmlzdHxlbnwxfHx8fDE3NzI3NDAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Apple Watch showing Labora"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex items-center">
                <div className="px-16 max-w-2xl">
                  <h3 className="text-4xl text-white mb-4">Track from your wrist</h3>
                  <p className="text-xl text-white/90 mb-6">
                    Apple Watch app with complications, haptic feedback, and glanceable timer.
                  </p>
                  <div className="flex items-center gap-2 text-white/80">
                    <Watch className="w-5 h-5" />
                    <span>Available on watchOS 9 and later</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900">
              Ready when you are
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of expecting mothers who trust Labora during their most important moments
            </p>
            
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 text-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Apple className="w-6 h-6" />
              Download for Free
            </motion.button>
            
            <p className="mt-6 text-gray-500">
              Available on iOS 16+ • Free with optional premium features
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">Labora</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Precision and peace of mind for your labor journey
              </p>
            </div>
            
            <div>
              <h4 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a></li>
                <li><Link to="/privacy" className="text-gray-700 hover:text-indigo-600 transition-colors">Privacy</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-700 hover:text-indigo-600 transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-gray-700 hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Labora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </MeshGradientBackground>
  );
}
