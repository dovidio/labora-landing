import { motion } from 'motion/react';

export function LaborProgress() {
  const stages = [
    { name: 'Early Labor', completed: true },
    { name: 'Active Labor', completed: true },
    { name: 'Transition', completed: false },
    { name: 'Delivery', completed: false },
  ];
  
  return (
    <div className="w-full p-8 bg-gradient-to-br from-white to-indigo-50 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-2xl text-gray-800 mb-2">Labor Stage</h3>
        <p className="text-indigo-600">Active Labor Phase</p>
      </div>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </div>
      
      {/* Stage indicators */}
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                stage.completed
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {stage.completed ? '✓' : index + 1}
            </div>
            <div className="flex-1">
              <p className={`text-sm ${stage.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                {stage.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-indigo-200">
        <p className="text-sm text-gray-700">
          Based on your contraction pattern, you're progressing well. 
          Keep breathing and stay relaxed.
        </p>
      </div>
    </div>
  );
}
