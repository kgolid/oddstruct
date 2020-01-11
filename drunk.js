import seedrandom from 'seed-random';
import { random_int, flip } from './core';

export const get_walk = ({
  min = 0,
  max = 10,
  min_stepsize = 0,
  max_stepsize = 1,
  start = 0,
  steps = 8,
  seed = null
}) => {
  const walker = drunk_walker(min, max, min_stepsize, max_stepsize, seed);

  const walk = [];
  let pos = start;
  for (let i = 0; i < steps; i++) {
    walk.push(pos);
    pos = walker(pos);
  }

  return walk;
};

export const drunk_walker = (min, max, min_step, max_step, seed) => {
  const rng = seed ? seedrandom(seed) : seedrandom();

  return n => {
    if (n < min || n > max) return n;

    const max_step_down = Math.min(n - min, max_step);
    const max_step_up = Math.min(max - n, max_step);

    const at_top = n + min_step > max;
    const at_bottom = n - min_step < min;

    const going_up = !at_top && (at_bottom || flip(rng));
    const max_distance = 1 + (going_up ? max_step_up : max_step_down);
    const distance = random_int(rng, min_step, max_distance);

    return going_up ? n + distance : n - distance;
  };
};
