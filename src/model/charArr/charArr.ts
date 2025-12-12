import { IChar, IState } from '../../types/Types'
import { characters } from './characters'
import { imigify } from '../../utils'

// Echo fighter IDs (clones that share moveset with base fighter) - hidden by default
const ECHO_FIGHTER_IDS = [3.5, 13.5, 15.5, 17.5, 18.5, 60.5, 66.6]; // Daisy, Dark Samus, Dark Pit, Lucina, Chrom, Ken, Richter

// Mii Fighter IDs - disabled by default
const MII_FIGHTER_IDS = [51, 52, 53]; // Brawler, Sword, Shooter

export const charArr: IChar[] = characters.map(char => ({
  ...char,
  media: imigify(char.name),
  enabled: !ECHO_FIGHTER_IDS.includes(char.id) && !MII_FIGHTER_IDS.includes(char.id),
  played: false,
  display: !ECHO_FIGHTER_IDS.includes(char.id),
}))

// Calculate initial state indices
const hiddenIndices = charArr
  .map((char, idx) => ECHO_FIGHTER_IDS.includes(char.id) ? idx : -1)
  .filter(idx => idx !== -1);

const disabledIndices = charArr
  .map((char, idx) => MII_FIGHTER_IDS.includes(char.id) ? idx : -1)
  .filter(idx => idx !== -1);

const enabledIndices = charArr
  .map((_, idx) => idx)
  .filter(idx => !hiddenIndices.includes(idx) && !disabledIndices.includes(idx));

export const initialCharState: IState = {
  enabled: enabledIndices,
  played: [],
  disabled: disabledIndices,
  hidden: hiddenIndices
}
