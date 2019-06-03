import React, { useContext, useState } from 'react';
import Context, { Icontext } from './Context';
import Cookies from 'universal-cookie';

const CookieNotice = () => {
  const { themeStyle } = useContext(Context as React.Context<Icontext>);
  const [showNotice, updateNotice] = useState(true);
  const cookyInstance = new Cookies();
  const handleCloseClick = () => {
    cookyInstance.set('notice', JSON.stringify(true), { path: '/' });
    return updateNotice(false);
  }
  const styles = {
    cookieNotice: {
      bottom: 0,
      backgroundColor: themeStyle.bgCookieNotice,
      color: 'white',
      width: '100%',
      display: showNotice  ? 'block' : 'none',
      zIndex: 1,
    },
    cookieMessage: {
      padding: 10, display: 'flex', alignItems: 'center', maxWidth: '100%', justifyContent: window.innerWidth < 800 ? 'center' : 'space-evenly'
    }
  };

  const CookieMessage = () => {
    return (
      <div style={styles.cookieMessage}>
        <div>
          This website uses cookies to store your current state of characters. For more information, see <a style={{color: '#9eef8b'}} href="https://github.com/wischli/smashbros-random-with-bans">here</a>.
        </div>
        <button type="button" style={{...themeStyle.button, minWidth: 100}} onClick={() => handleCloseClick() }>
          Accept
        </button>
      </div>
    )
  }

  return (
    <div style={{ ...styles.cookieNotice, position: 'fixed' }}>
       <CookieMessage />
    </div>
  );
}
export default CookieNotice;
