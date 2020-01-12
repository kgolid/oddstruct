export const random_int = (rng, min, max) => min + Math.floor(rng() * (max - min));

export const flip = (rng, chance) => rng() < (chance === undefined ? 0.5 : chance);
