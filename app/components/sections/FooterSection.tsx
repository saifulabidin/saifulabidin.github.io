'use client';

export default function FooterSection() {
  return (
    <footer className="py-8 bg-[#19222D] border-t border-[#2A3749]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-[#C6F10E] text-xl font-bold">Saiful Abidin</div>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            <p className="mt-1">Made with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
