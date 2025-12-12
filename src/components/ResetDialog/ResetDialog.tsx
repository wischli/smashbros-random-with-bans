import { CSSProperties } from 'react';

interface ResetDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
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

const ResetDialog = ({ isOpen, onConfirm, onCancel }: ResetDialogProps) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onCancel}>
      <div style={dialogStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={titleStyle}>Reset Selection?</h2>
        <p style={messageStyle}>
          You have characters that have been played or disabled.
          Resetting will clear all your progress. Are you sure?
        </p>
        <div style={buttonContainerStyle}>
          <button
            type="button"
            style={cancelButtonStyle}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            style={confirmButtonStyle}
            onClick={onConfirm}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetDialog;
