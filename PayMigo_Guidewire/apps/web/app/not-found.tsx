import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-3xl font-bold">404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
        Return Home
      </Link>
    </div>
  );
}
