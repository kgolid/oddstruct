export const random_int = (rng, min, max) => min + Math.floor(rng() * (max - min));

export const flip = (rng, chance) => rng() < (chance === undefined ? 0.5 : chance);

export const shuffle = (rng, arr) => {
  const array = arr.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
