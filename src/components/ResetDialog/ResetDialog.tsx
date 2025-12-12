import { CSSProperties, useState } from 'react';

interface ResetDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  confirmColor?: string;
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const dialogStyle: CSSProperties = {
  backgroundColor: '#2a2a2a',
  borderRadius: '8px',
  padding: '24px',
  maxWidth: '400px',
  width: '90%',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
};

const titleStyle: CSSProperties = {
  color: '#fff',
  fontSize: '1.5rem',
  marginBottom: '16px',
  fontWeight: 'bold',
};

const messageStyle: CSSProperties = {
  color: '#ccc',
  fontSize: '1rem',
  marginBottom: '24px',
  lineHeight: '1.5',
};

const buttonContainerStyle: CSSProperties = {
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
};

const buttonBaseStyle: CSSProperties = {
  padding: '12px 24px',
  borderRadius: '4px',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'opacity 0.2s',
};

const confirmButtonStyle: CSSProperties = {
  ...buttonBaseStyle,
  backgroundColor: '#e74c3c',
  color: '#fff',
};

const cancelButtonStyle: CSSProperties = {
  ...buttonBaseStyle,
  backgroundColor: '#555',
  color: '#fff',
};

const ResetDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  title = 'Reset Selection?',
  message = 'You have characters that have been played or disabled. Resetting will clear all your progress. Are you sure?',
  confirmText = 'Reset',
  confirmColor = '#e74c3c',
}: ResetDialogProps) => {
  const [isConfirming, setIsConfirming] = useState(false);

  if (!isOpen) return null;

  const handleConfirmClick = () => {
    setIsConfirming(true);
    setTimeout(() => {
      onConfirm();
      setIsConfirming(false);
    }, 600);
  };

  return (
    <div style={overlayStyle} onClick={isConfirming ? undefined : onCancel}>
      <div style={dialogStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={messageStyle}>{message}</p>
        <div style={buttonContainerStyle}>
          <button
            type="button"
            style={{
              ...cancelButtonStyle,
              opacity: isConfirming ? 0.5 : 1,
              cursor: isConfirming ? 'not-allowed' : 'pointer',
            }}
            onClick={isConfirming ? undefined : onCancel}
            disabled={isConfirming}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`neo-btn ${isConfirming ? 'randomizing' : ''}`}
            style={{
              ...confirmButtonStyle,
              backgroundColor: confirmColor,
              cursor: isConfirming ? 'not-allowed' : 'pointer',
            }}
            onClick={isConfirming ? undefined : handleConfirmClick}
            disabled={isConfirming}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetDialog;
