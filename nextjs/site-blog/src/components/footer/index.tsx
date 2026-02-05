import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Link href="/" className="text-xl font-bold">Logo</Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <Link href="/termos-de-uso" className="transition-colors hover:text-blue-500">
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-blue-500"
            >
              Política de Privacidade
            </Link>
            <Link href="/feedback" className="transition-colors hover:text-blue-500">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}