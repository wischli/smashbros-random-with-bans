export const color = {
    red: '#ffb3b3',
    green: '#99f9ae',
    card: '#26353c',
    cardTitle: '#aacdde',
    nav: '#466370',
    navSecondaryBtn: '#ddddddb3',
    cookieNotice: '#26353c',
};

const themeStyle = {
    bgRed: color.red,
    bgGreen: color.green,
    bgCard: color.card,
    bgNav: color.nav,
    bgNavSecondaryBtn: color.navSecondaryBtn,
    colorCardTitle: color.cardTitle,
    backgroundColor: '#486471',
    bgCookieNotice: color.cookieNotice,
    bgContent: '#486471',
    button: {
        height: '50px',
        fontSize: '15px',
        fontWeight: '700',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: '5px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: '2px solid'
    },
    buttonLeft: {
        width: '49%',
        backgroundColor: color.red,
        color: '#383838',
        borderColor: '#383838'
    },
    buttonRight: {
        width: '49%',
        backgroundColor: color.green,
        color: 'black',
        borderColor: 'black'
    },
    card: {
    // flex: '1 1 auto',
    // padding: '1.25rem',
        border: '1px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '0.25rem',
        // display: 'flex',
        width: 250,
        backgroundColor: color.card,
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 1000,
        padding: 10
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardImg: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginBottom: 20,
        marginTop: 20
    },
    cardClose: {
        position: 'absolute',
        top: '-15px',
        background: '#bb5555',
        height: '30px',
        width: '30px',
        right: '-15px',
        borderColor: 'transparent',
        borderRadius: '100%',
    },
    cardTitle: {
        color: color.cardTitle,
        textAlign: 'center',
        margin: 0,
        fontSize: '1.75rem'
    },
    characterRow: {
        paddingBottom: 10,
        paddingTop: 5,
        borderBottom: '1px solid white'
    },
    characterRowTitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        margin: 5
    },
    nav: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        backgroundColor: color.nav,
        position: 'fixed',
        height: 50,
        top: 0,
        alignItems: 'center'
    }
    // buttonStickyLeft: {
    //   width: '49%',
    //   backgroundColor: '#ffb3b3',
    //   color: '#383838',
    //   borderColor: '#383838',
    // },
    // buttonStickyRight: {
    //   width: '49%',
    //   backgroundColor: '#99f9ae',
    //   color: 'black',
    //   borderColor: 'black',
    // }
};
export default themeStyle;
