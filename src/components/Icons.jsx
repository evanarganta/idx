import React from 'react';

function BaseSvg({ children, size = 18, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </BaseSvg>
  );
}

export function BuildingIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </BaseSvg>
  );
}

export function CalendarIcon(props) {
  return (
    <BaseSvg {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </BaseSvg>
  );
}

export function ImageIcon(props) {
  return (
    <BaseSvg {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </BaseSvg>
  );
}

export function VideoIcon(props) {
  return (
    <BaseSvg {...props}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect width="14" height="14" x="1" y="5" rx="2" ry="2" />
    </BaseSvg>
  );
}

export function FileTextIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </BaseSvg>
  );
}

export function TrendingUpIcon(props) {
  return (
    <BaseSvg {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </BaseSvg>
  );
}

export function TrendingDownIcon(props) {
  return (
    <BaseSvg {...props}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </BaseSvg>
  );
}

export function ClockIcon(props) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </BaseSvg>
  );
}

export function MapPinIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </BaseSvg>
  );
}

export function PlayIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      {...props}
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export function PauseIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      {...props}
    >
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function RotateCcwIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </BaseSvg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </BaseSvg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </BaseSvg>
  );
}

export function UserIcon(props) {
  return (
    <BaseSvg {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </BaseSvg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="m9 18 6-6-6-6" />
    </BaseSvg>
  );
}

export function ChevronLeftIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="m15 18-6-6 6-6" />
    </BaseSvg>
  );
}

export function XIcon(props) {
  return (
    <BaseSvg {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </BaseSvg>
  );
}
