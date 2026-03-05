import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '8:00', duration: 30, frequency: 10 },
  { time: '8:15', duration: 35, frequency: 9 },
  { time: '8:30', duration: 40, frequency: 8 },
  { time: '8:45', duration: 42, frequency: 7 },
  { time: '9:00', duration: 45, frequency: 6 },
  { time: '9:15', duration: 48, frequency: 5 },
  { time: '9:30', duration: 50, frequency: 5 },
  { time: '9:45', duration: 52, frequency: 4 },
  { time: '10:00', duration: 55, frequency: 3 },
];

export function StatisticsChart() {
  return (
    <div className="w-full h-80 p-6 bg-white rounded-3xl">
      <div className="mb-4">
        <h3 className="text-xl text-gray-800 mb-1">Contraction Pattern</h3>
        <p className="text-sm text-gray-500">Last 2 hours</p>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="duration" 
            stroke="#6366f1" 
            strokeWidth={3}
            dot={{ fill: '#6366f1', r: 4 }}
            name="Duration (sec)"
          />
          <Line 
            type="monotone" 
            dataKey="frequency" 
            stroke="#f6a192" 
            strokeWidth={3}
            dot={{ fill: '#f6a192', r: 4 }}
            name="Frequency (min)"
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="flex gap-6 mt-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-sm text-gray-600">Duration</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f6a192' }} />
          <span className="text-sm text-gray-600">Frequency</span>
        </div>
      </div>
    </div>
  );
}
