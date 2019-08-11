import React, { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import Context, { Icontext } from '../Context';
import { buttonStyle, messageStyle, noticeStyle } from './CookieNotice-style';

const CookieNotice = () => {
  const { cookies } = useContext(Context as React.Context<Icontext>);
  const [hideNotice, setHide] = useState(cookies.notice);

  const handleCloseClick = () => {
    const cookyInstance = new Cookies();
    cookyInstance.set('notice', JSON.stringify(true), { path: '/' });
    setHide(true);
  };

  const CookieMessage = () => {
    return (
      <div style={messageStyle(!hideNotice)}>
        <div>
          This website uses cookies to store your current state of characters. For more information, see
          <a style={{ color: '#9eef8b' }} href="https://github.com/wischli/smashbros-random-with-bans">
            here
          </a>
          .
        </div>
        <button type="button" style={ buttonStyle } onClick={() => handleCloseClick()}>
          Accept
        </button>
      </div>
    );
  };

  return (
    <div style={noticeStyle(cookies.notice)}>
      <CookieMessage />
    </div>
  );
};
export default CookieNotice;
