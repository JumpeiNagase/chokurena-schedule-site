export const genres = e => [...new Set([e.kind, ...(e.genres || [])])];
export function timeBand(e) {
  const time = e.start || e.performance_start;
  if (time) { const hour = Number(time.split(':')[0]); return hour < 12 ? 'morning' : hour < 18 ? 'day' : 'night'; }
  if (/昼/.test(e.time_note)) return 'day';
  if (/夜/.test(e.time_note)) return 'night';
  return 'unknown';
}
export function matches(e, f) {
  return (!f.area || (e.area || '未発表') === f.area) && (!f.venue || e.venue === f.venue) &&
    (!f.time || timeBand(e) === f.time) && (!f.kind || genres(e).includes(f.kind));
}
