/** Line icons drawn in the site's pen: 16-unit grid, one stroke weight. */
const PATHS = {
  check: 'M3 8.5l3.2 3.2L13 4.8',
  cloud: 'M4.6 12.5h7a2.9 2.9 0 0 0 .3-5.8 4 4 0 0 0-7.7 1A2.4 2.4 0 0 0 4.6 12.5z',
  loop: 'M12.9 6.2A5.2 5.2 0 1 0 13.2 10M13.2 2.8v3.6H9.6',
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
