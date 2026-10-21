export function AppleIcon() {
  return <svg viewBox="0 0 24 28" aria-hidden="true"><path fill="currentColor" d="M19.1 14.6c0-3 2.5-4.5 2.6-4.6-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.6 1.1-4.5 1.1-.9 0-2.4-1.1-3.9-1.1-2 0-3.9 1.2-4.9 2.9-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.1 2.9 3.6 2.8 1.4-.1 2-1 3.8-1 1.8 0 2.3 1 3.9 1 1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.5-3.1 1.6-3.2-.1 0-2.9-1.1-2.9-4.7ZM16.1 5.8c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.4 1.8-.7.9-1.4 2.4-1.2 3.7 1.3.1 2.6-.7 3.4-1.7Z" /></svg>;
}

export function PlayIcon() {
  return <svg viewBox="0 0 28 30" aria-hidden="true"><path fill="#35c4f3" d="M2 1.5 16 15 2 28.5C1.4 28 1 27.3 1 26.3V3.7c0-1 .4-1.7 1-2.2Z"/><path fill="#66db8a" d="m2 1.5 17.6 10L16 15Z"/><path fill="#ffca43" d="m19.6 11.5 6 3.4c1.1.6 1.1 1.5 0 2.1l-6 3.4L16 15Z"/><path fill="#ff6376" d="m2 28.5 17.6-8.1L16 15Z"/></svg>;
}

export function FeatureIcon({ name }: { name: 'explore' | 'star' | 'bookmark' }) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'explore' && <><circle cx="14" cy="14" r="11.5"/><path d="m19 9-3 7-7 3 3-7 7-3Z"/><circle cx="14" cy="14" r=".7" fill="currentColor"/></>}
    {name === 'star' && <path d="m14 2 3.7 7.5 8.3 1.2-6 5.9 1.4 8.3-7.4-4-7.4 4L8 16.6l-6-5.9 8.3-1.2L14 2Z"/>}
    {name === 'bookmark' && <path d="M6 3h16v23l-8-5-8 5V3Z"/>}
  </svg>;
}
