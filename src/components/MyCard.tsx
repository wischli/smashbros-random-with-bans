import React, { useContext } from 'react';
import Context, { Icontext } from './Context';
import { imigify } from './CharacterList';
import { IcookieState } from './Interfaces';

const MyCard = () => {
    const {
        cookies,
        state,
        themeStyle,
        handleNextClick,
        handlePrevClick,
        displayCard,
        displayLoad,
        disableLoad,
        handleDisplayClick,
        handleCookieLoad,
    } = useContext(Context as React.Context<Icontext>);
    let loadBlock = <div></div>;
    if (cookies.characters) {
      const date: string = (new Date((cookies.characters as IcookieState).date) as any).toGMTString();
      loadBlock =
        <p style={{color: themeStyle.colorCardTitle, textAlign: 'center'}}>
          from {date}
        </p>;
    }
    const character = state.enabled[0];
    return (
        <div className="card" style={{ ...themeStyle.card, display: displayCard || displayLoad ? 'block' : 'none' }}>
            <button
                type="button"
                style={{ ...themeStyle.cardClose }}
                onClick={() => displayLoad ? disableLoad() : handleDisplayClick(displayCard)}
                className="close"
            />
          <h2 style={themeStyle.cardTitle}>{displayLoad ? 'Discovered Save' : character.name}</h2>
            {displayLoad ? loadBlock : <img src={imigify(character.name)} style={{ ...themeStyle.cardImg }} alt={character.name} />}
            <div style={{ ...themeStyle.buttonRow }}>
                <button
                    type="button"
                    style={{ ...themeStyle.button, ...themeStyle.buttonLeft }}
                    onClick={() => displayLoad ? disableLoad() : handlePrevClick()}
                >
          {displayLoad ? 'Dismiss' : 'Prev'}
                </button>
                <button
                    type="button"
                    style={{ ...themeStyle.button, ...themeStyle.buttonRight }}
                    onClick={() => displayLoad ? handleCookieLoad(cookies.characters as IcookieState) : handleNextClick()}
                >
          {displayLoad ? 'Load' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default MyCard;