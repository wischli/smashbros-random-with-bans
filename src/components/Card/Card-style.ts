import { CSSProperties } from 'react';

// Check if mobile (can't use hooks here, so use window width)
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

// Neo-brutalism button style
export const buttonStyle = (isLeft: boolean): CSSProperties => {
  return {
    width: '48%',
    height: '50px',
    fontSize: '14px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    transition: 'all 0.1s ease',
    color: '#000',
    backgroundColor: isLeft ? '#ff6b6b' : '#51cf66',
  };
};

export const btnRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '15px',
  padding: isMobile ? '0 10px' : '0',
};

export const closeBtnStyle: CSSProperties = {
  position: 'absolute',
  top: '-12px',
  right: '-12px',
  background: '#ff6b6b',
  height: '32px',
  width: '32px',
  border: '3px solid #000',
  boxShadow: '3px 3px 0px #000',
  cursor: 'pointer',
  fontWeight: 800,
  fontSize: '16px',
};

export const cardStyle = (display: boolean): CSSProperties => {
  return {
    display: display ? 'block' : 'none',
    border: '4px solid #000',
    boxShadow: '8px 8px 0px #000',
    width: '95%',
    maxWidth: 1200,
    backgroundColor: '#1a1a2e',
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1000,
    padding: isMobile ? '0' : '20px',
  };
};

export const cardTitleStyle: CSSProperties = {
  color: '#ffffff',
  textAlign: 'center',
  margin: 0,
  marginBottom: '15px',
  fontSize: '1.5rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 0px #000',
  fontFamily: 'monospace',
  background: '#000',
  padding: isMobile ? '8px 0' : '8px',
  border: '3px solid #ffffff',
};

export const cardImgStyle: CSSProperties = {
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  marginBottom: 10,
  marginTop: 15,
  border: '3px solid #000',
  boxShadow: '4px 4px 0px #000',
  maxWidth: '120px',
};
