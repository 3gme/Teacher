export function isPast(date) {
  return new Date(date) < new Date();
}
