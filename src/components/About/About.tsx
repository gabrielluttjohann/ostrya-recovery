import aboutImg from "@/assets/about.png"


export default function AboutUs() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Quem Somos
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                A Ostrya Recovery é uma empresa especializada em cobrança
                administrativa (amigável) e judicial, além de oferecer
                treinamento para análise de crédito e cobrança interna.
              </p>

              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Sabemos que a recuperação de crédito exige estratégia,
                transparência e segurança. Por isso, trabalhamos de forma
                personalizada para cada caso, sempre com foco na ética e na busca pelos
                melhores resultados financeiros para sua empresa.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Fale conosco
              </span>
            </button>
          </div>
          <img
            className="hidden lg:block lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src={aboutImg.src}
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
}
