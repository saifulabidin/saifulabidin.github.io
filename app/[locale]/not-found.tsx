import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border-4 border-black p-8 rounded-2xl shadow-neo text-center">
        <div className="inline-block bg-[#FF90E8] border-2 border-black px-4 py-1 rounded-full font-black text-sm uppercase tracking-wider mb-4">
          404 Error
        </div>
        <h1 className="text-4xl font-black font-display mb-3">Page Not Found</h1>
        <p className="text-neutral-700 text-sm font-medium mb-6">
          The requested page could not be located on this server.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#C6F10E] text-black font-black text-sm px-6 py-3 rounded-xl border-2 border-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
