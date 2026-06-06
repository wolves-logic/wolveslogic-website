export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 158 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F77DD" />
          <stop offset="100%" stopColor="#185FA5" />
        </linearGradient>
        <linearGradient id="lGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#185FA5" />
          <stop offset="100%" stopColor="#7F77DD" />
        </linearGradient>
      </defs>
      {/* W/M geometric shape */}
      <polygon
        points="0,0 13,80 30,30 47,80 60,0 53,0 47,55 30,10 13,55 7,0"
        fill="url(#wGrad)"
      />
      {/* L vertical bar */}
      <rect x="72" y="0" width="11" height="80" fill="url(#lGrad)" />
      {/* L horizontal bar */}
      <rect x="72" y="69" width="35" height="11" fill="url(#lGrad)" />
    </svg>
  );
}
