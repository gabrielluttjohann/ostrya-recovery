import img from "../../assets/consultant.png";

export default function CTA() {
  return (
    <section
      className="bg-white min-h-[600px] bg-center lg:bg-cover object-cover"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="relative flex min-h-[800px] items-center justify-center lg:justify-end py-8 px-6 md:px-12 mx-auto max-w-screen-xl sm:py-16 lg:px-6 z-10">
        <div className="max-w-lg text-center lg:text-start">
          <h2 className="pb-4 text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal">
            Qual o nosso diferencial?
          </h2>
          <p className="mb-6 text-gray-500 sm:text-lg">
            <strong className="pb-5"> Não utilizamos call centers!</strong>
          </p>
          <p className="mb-6 font-light text-gray-500 sm:text-lg">
            Atuamos com uma equipe altamente qualificada, garantindo um contato
            profissional e estratégico.
          </p>
          <p className="mb-6 font-light text-gray-500 sm:text-lg">
            Nossa abordagem respeitosa e eficiente preserva a imagem da sua
            empresa e mantém um bom relacionamento com seus clientes.
          </p>
          <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row sm:space-x-4">
            <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Fale conosco
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
