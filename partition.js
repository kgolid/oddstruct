import { shuffle, flip } from './core';

export const get_partition = rng => shuffle(rng, get_elements(rng));

const get_elements = rng => get_rule(rng)();

const get_rule = rng => {
  const rule = n => {
    if (n === 4) return flip(rng, 0.25) ? [4] : [8, 8].flatMap(rule);
    if (n === 8) return flip(rng, 0.5) ? [8] : [16, 16];
    return [4, 4, 4, 4].flatMap(rule);
  };
  return rule;
};
