import service1 from "@/assets/analytical-training.png";
import service2 from "@/assets/judicial-recovery.png";
import service3 from "@/assets/friendly-collection.png";
import service4 from "@/assets/organization.png";

export default function Services() {
  return (
    <div className="relative overflow-hidden  pt-16 pb-32 space-y-24">
      <div className="flex items-center justify-center">
        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
          {/* Nossos Serviços */}
        </h2>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Cobrança Administrativa (Amigável)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Realizamos um processo estruturado de negociação respeitosa,
                  encontrando soluções viáveis para o pagamento das dívidas e
                  preservando a relação com seus clientes.
                </p>
                <div className="mt-6">
                  <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Saiba Mais
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src={service1.src}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Cobrança Judicial
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Se a cobrança amigável não resolver, acionamos a via judicial,
                  sempre com estratégia jurídica eficiente para garantir o
                  recebimento dos valores devidos.
                </p>
                <div className="mt-6">
                  <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Saiba Mais
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src={service2.src}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Treinamento em Análise de Crédito
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Capacitamos sua equipe para identificar riscos e evitar
                  concessões de crédito a clientes inadimplentes, reduzindo o
                  risco financeiro do seu negócio.
                </p>
                <div className="mt-6">
                  <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Saiba Mais
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width={646}
                height={485}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src={service3.src}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Treinamento da Equipe de Cobrança Interna{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Preparamos sua equipe para executar cobranças internas mais
                  eficazes e estratégicas, garantindo maior recuperação de
                  crédito e melhoria na gestão financeira.
                </p>
                <div className="mt-6">
                  <button className="sm:w-fit w-full px-5 py-3 bg-pale-green hover:bg-pale-green transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Saiba Mais
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-xl ring-1  ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src={service4.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
