import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';
import { PT_Sans_Caption } from 'next/font/google';
import { SupportCard } from '../support-card';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
});

export function SupportSection() {
  return (
    <section className="pb-8 md:py-10 mx-auto px-4 max-w-7xl">
      <div className="container flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-balance text-center text-gray-100 text-3xl md:text-4xl font-bold max-w-3xl`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <SupportCard
            Icon={PaintbrushVertical}
            title="Personalize seu site"
            description="Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara."
            color="blue"
          />

          <SupportCard
            Icon={Store}
            title="Venda de qualquer loja"
            description="Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado."
            color="cyan"
          />

          <SupportCard
            Icon={HeartHandshake}
            title="Receba suporte amigável"
            description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};