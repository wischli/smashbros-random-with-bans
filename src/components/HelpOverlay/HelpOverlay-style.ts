import { CSSProperties } from 'react';

export const helpOverlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  boxSizing: 'border-box',
};

export const helpContentStyle: CSSProperties = {
  backgroundColor: '#1a1a2e',
  border: '4px solid #000',
  boxShadow: '8px 8px 0px #000',
  maxWidth: '800px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  fontFamily: "'Space Mono', monospace",
};

export const helpHeaderStyle: CSSProperties = {
  backgroundColor: '#000000',
  padding: '20px',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

export const helpTitleStyle: CSSProperties = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '4px',
  margin: 0,
  fontFamily: "'Space Mono', monospace",
};

export const helpSubtitleStyle: CSSProperties = {
  color: '#888888',
  fontSize: '12px',
  marginTop: '8px',
  fontFamily: "'Space Mono', monospace",
};

export const helpGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '16px',
  padding: '20px',
};

export const helpFooterStyle: CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  borderTop: '3px solid #000',
  backgroundColor: '#1a1a2e',
  position: 'sticky',
  bottom: 0,
};

export const closeButtonStyle: CSSProperties = {
  height: '45px',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  border: '3px solid #000',
  boxShadow: '3px 3px 0px #000',
  backgroundColor: '#51cf66',
  color: '#000000',
  cursor: 'pointer',
  fontFamily: "'Space Mono', monospace",
  padding: '0 30px',
};

// Annotation card styles
export const annotationCardStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  border: '3px solid #000',
  boxShadow: '4px 4px 0px #000',
  padding: '16px',
};

export const annotationTitleStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#000000',
  marginBottom: '10px',
  fontFamily: "'Space Mono', monospace",
};

export const annotationIconStyle: CSSProperties = {
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  color: '#ffffff',
  fontSize: '14px',
  flexShrink: 0,
};

export const annotationDescStyle: CSSProperties = {
  fontSize: '13px',
  color: '#333333',
  lineHeight: 1.5,
  marginBottom: '10px',
  fontFamily: "'Space Mono', monospace",
};

export const conditionalHintStyle = (isWarning: boolean): CSSProperties => ({
  fontSize: '12px',
  padding: '8px 12px',
  backgroundColor: isWarning ? '#fff3cd' : '#e8f5e9',
  border: `2px solid ${isWarning ? '#ffc107' : '#51cf66'}`,
  color: '#000000',
  fontWeight: 600,
  marginTop: '8px',
  fontFamily: "'Space Mono', monospace",
});
