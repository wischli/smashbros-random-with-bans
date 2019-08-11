import { color, themeButtonStyle } from '../../layout/themeStyle';

export const buttonStyle = (isLeft: boolean): React.CSSProperties => {
    return {
        ...themeButtonStyle,
        width: '49%',
        color: isLeft ? color.cardBtnLeft : color.cardBtnRight,
        borderColor: isLeft ? color.cardBtnLeft : color.cardBtnRight,
        backgroundColor: isLeft ? color.red : color.green,
    }
}

export const btnRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
}

export const closeBtnStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-15px',
    background: '#bb5555',
    height: '30px',
    width: '30px',
    right: '-15px',
    borderColor: 'transparent',
    borderRadius: '100%',
}

export const cardStyle = (display: boolean): React.CSSProperties => {
    return {
        display: display ? 'block' : 'none',
        border: '1px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '0.25rem',
        width: 250,
        backgroundColor: color.card,
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 1000,
        padding: 10,
    };
};

export const cardTitleStyle: React.CSSProperties = {
    color: color.cardTitle,
    textAlign: 'center',
    margin: 0,
    fontSize: '1.75rem',
}

export const cardImgStyle: React.CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    marginBottom: 20,
    marginTop: 20,
}

export const cardCookieStyle: React.CSSProperties = {
    color: color.cardTitle, textAlign: 'center'
}