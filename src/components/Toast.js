import React, { useEffect } from 'react';

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // پیام به مدت ۳ ثانیه نمایش داده می‌شود

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      zIndex: 1000,
      fontWeight: 'bold',
      fontSize: '16px',
    }}>
      {message}
    </div>
  );
}

export default Toast;
