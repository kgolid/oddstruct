import seedrandom from 'seed-random';
import { shuffle, flip } from './core';

export const get_partition = seed => {
  const rng = seed ? seedrandom(seed) : seedrandom();
  const elements = get_elements(rng);
  return shuffle(rng, elements);
};

const get_elements = rng => {
  const rule = get_rule(rng);
  return rule(1);
};

const get_rule = rng => {
  const rule = n => {
    if (n === 1) return [4, 4, 4, 4].flatMap(rule);
    if (n === 4) return flip(rng, 0.25) ? [4] : [8, 8].flatMap(rule);
    if (n === 8) return flip(rng, 0.5) ? [8] : [16, 16];
  };
  return rule;
};
