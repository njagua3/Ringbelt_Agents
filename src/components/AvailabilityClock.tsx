import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function AvailabilityClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const day = now.getDay();
      const hour = now.getHours();
      
      // Available Monday (1) through Saturday (6), 8am to 5pm
      setIsAvailable(
        day >= 1 && day <= 6 && // Monday to Saturday
        hour >= 8 && hour < 17  // 8am to 5pm
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Clock className="h-4 w-4" />
      <span>{formattedTime}</span>
      <span className={`px-2 py-1 rounded-full text-xs ${
        isAvailable 
          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
          : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
      }`}>
        {isAvailable ? 'Available' : 'Unavailable'}
      </span>
    </div>
  );
}