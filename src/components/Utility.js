const getCharacterById = ({characters, id}) => {
  for (let i = 0; i < characters.length; i+=1){
    if (characters[i].id === id){
      return characters[i];
    }
  }
  throw new Error(`Cannot find character with id ${id}`);
}
export default getCharacterById;
export const getCharactersByIds = ({characters, enabled, played, disabled}) => {
  const newChars = enabled.map(id => getCharacterById({characters, id}));
  newChars.push(...played.map(id => ({...getCharacterById({characters, id}), played: true})));
  newChars.push(...disabled.map(id => ({...getCharacterById({characters, id}), enabled: false})));
  return newChars;
}
export const splitArray = arrayInput => {
  const played = [];
  const disabled = [];
  const enabled = arrayInput.filter(el => {
    if (el.played){
      played.push(el);
    }
    else if (!el.enabled) {
      disabled.push(el);
    }
    return !el.played && el.enabled;
  });
  return {enabled, played, disabled};
}
export const unifyToArray = (obj) => {
  // console.table([...Object.values(obj)]);
  let array = [];
  Object.values(obj).map(x => {
    array = [...array, ...x];
    return '';
  });
  return array;
};

export const randomize = arrayInput => {
  const {enabled, played, disabled} = splitArray(arrayInput);
  let currentIndex = enabled.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [enabled[randomIndex], enabled[currentIndex]] = [enabled[currentIndex], enabled[randomIndex]];
  }
  return(unifyToArray({enabled, played, disabled}));
  // return [...enabled, ...played, ...disabled];
};

// export default {splitArray, unifyToArray, randomize};
