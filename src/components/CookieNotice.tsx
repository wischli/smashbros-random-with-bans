import React, { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import Context, { Icontext } from './Context';

const CookieNotice = () => {
  const { themeStyle, cookies } = useContext(Context as React.Context<Icontext>);
  const [hideNotice, setHide] = useState(cookies.notice);

  const handleCloseClick = () => {
    const cookyInstance = new Cookies();
    cookyInstance.set('notice', JSON.stringify(true), { path: '/' });
    setHide(true);
  };
  const styles = {
    cookieNotice: {
      bottom: 0,
      backgroundColor: themeStyle.bgCookieNotice,
      color: 'white',
      width: '100%',
      display: cookies.notice ? 'block' : 'none',
      zIndex: 1,
    },
    cookieMessage: {
      padding: 10,
      display: hideNotice ? 'none' : 'flex',
      alignItems: 'center',
      maxWidth: '100%',
      justifyContent: window.innerWidth < 800 ? 'center' : 'space-evenly',
    },
  };

  const CookieMessage = () => {
    return (
      <div style={styles.cookieMessage}>
        <div>
          This website uses cookies to store your current state of characters. For more information, see
          <a style={{ color: '#9eef8b' }} href="https://github.com/wischli/smashbros-random-with-bans">
            here
          </a>
          .
        </div>
        <button type="button" style={{ ...themeStyle.button, minWidth: 100 }} onClick={() => handleCloseClick()}>
          Accept
        </button>
      </div>
    );
  };

  return (
    <div style={{ ...styles.cookieNotice, position: 'fixed' }}>
      <CookieMessage />
    </div>
  );
};
export default CookieNotice;
