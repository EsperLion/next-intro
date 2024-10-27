import Link from 'next/link';

export default function Home() {
  return (
    <div className="root">
      <h1>Root Page</h1>
      <Link href="/form-example">Form Example</Link>
    </div>
  );
}
