import { ArrowRight, Store } from 'lucide-react';
import { PT_Sans_Caption } from 'next/font/google';
import Link from 'next/link';
import { Button } from '../ui/button';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
});

export function CallToAction() {
  return (
    <section className="py-24 mx-auto">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-3xl md:text-4xl lg:text-5xl max-w-2xl`}
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild className="mt-6 bg-cyan-500 hover:bg-cyan-600" size="lg">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};