import Link from "next/link";

export default function NotFound() {
  return (
    <div className="nf">
      <h1>404</h1>
      <p>This page could not be found.</p>
      <Link className="btn btn--blue" href="/">Back to ANAWAK</Link>
    </div>
  );
}
