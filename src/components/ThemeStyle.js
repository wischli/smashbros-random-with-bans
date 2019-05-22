const themeStyle = {
  backgroundColor: '#486471',
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
    backgroundColor: '#ffb3b3',
    color: '#383838',
    borderColor: '#383838'
  },
  buttonRight: {
    width: '49%',
    backgroundColor: '#99f9ae',
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
    backgroundColor: '#002f46',
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1000,
    padding: 10,
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
    top: '-5px',
    background: '#ff000000',
    height: '50px',
    width: '50px',
    right: '-3px',
    borderColor: 'transparent',
  },
  cardTitle: {
    color: '#aacdde',
    textAlign: 'center',
    margin: 0,
    fontSize: '1.75rem',
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
