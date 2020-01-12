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
export const mutate_walk = (rng, walk, walker, mutate_chance) => {
  const new_walk = [walk[0]];
  for (let i = 1; i < walk.length; i++) {
    new_walk.push(flip(rng, mutate_chance) ? walker(new_walk[i - 1]) : walk[i]);
  }
  return new_walk;
};

export const snap_to_highlights = (rng, walk, highlights, snap_chance, max_snap_dist) =>
  walk.map(pnt => (flip(rng, snap_chance) ? snap_point(pnt, highlights, max_snap_dist) : pnt));

const snap_point = (point, highlights, max_snap_dist) => {
  const closest = highlights.sort((a, b) => Math.abs(point - a) - Math.abs(point - b))[0];
  return Math.abs(point - closest) <= max_snap_dist ? closest : point;
};

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
