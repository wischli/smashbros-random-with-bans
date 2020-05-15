import { IState } from '../../../types/Types';

export const bgColor = {
  enabled: 'white',
  disabled: '#ff6767b8',
  played: '#70f78e',
  hidden: 'grey',
};

export const charStyle = (charState: keyof IState): React.CSSProperties => {
  return {
    maxWidth: window.innerWidth < 1000 ? 60 : 85,
    maxHeight: window.innerWidth < 1000 ? 60 : 85,
    backgroundColor: bgColor[charState],
    borderRadius: '100%',
    display: 'block,',
  };
};

export const imageStyle = (charState: keyof IState): React.CSSProperties => {
  return {
    opacity: charState === 'enabled' ? 1 : 0.6,
    margin: 'auto',
    display: 'block',
    maxWidth: window.innerWidth < 1000 ? 55 : 80,
    padding: 1,
  };
};
