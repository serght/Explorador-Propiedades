'use client';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Segmented Spinning Circle Loader */}
      <div className="relative w-12 h-12 mb-4">
        <svg 
          className="animate-spin" 
          width="48" 
          height="48" 
          viewBox="0 0 48 48"
        >
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
            strokeDasharray="8 4"
          />
          {/* Animated circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeDashoffset="0"
            className="opacity-75"
          />
          {/* Gradient overlay */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      

    </div>
  );
}