export const random_int = (rng, min, max) => min + Math.floor(rng() * (max - min));

export const flip = (rng, chance) => rng() < (chance ? chance : 0.5);
