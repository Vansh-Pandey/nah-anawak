/** Shown by Next.js while a page or route segment is still loading. */
export default function Loading() {
  return (
    <div className="routeLoading" role="status" aria-live="polite" aria-label="Loading">
      <span className="loader__logo">ANAWAK</span>
      <span className="loader__bar"><i /></span>
    </div>
  );
}
