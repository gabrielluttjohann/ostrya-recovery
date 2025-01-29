export default function Contact() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-tight">
              Entre em Contato
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Quer aumentar a recuperação de crédito da sua empresa sem desgastes e sem custos fixos?{" "}
              
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <strong className="text-gray-800">Fale conosco agora e descubra como podemos ajudar!</strong>
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primeiro Bloco de Informações */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">Endereço</h3>
              <p className="mt-4 text-gray-600 text-center">1234 Main St, Suite 100</p>
              <p className="text-gray-600 text-center">City, Country 12345</p>
              <p className="text-gray-600 text-center">Phone: (123) 456-7890</p>
            </div>
  
            {/* Segundo Bloco de Informações */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">Contato Geral</h3>
              <p className="mt-4 text-gray-600 text-center">support@example.com</p>
              <p className="text-gray-600 text-center">sales@example.com</p>
            </div>
  
            {/* Terceiro Bloco de Informações */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">E-mail</h3>
              <p className="mt-4 text-gray-600 text-center">contact@ostryarecovery.com</p>
              <p className="text-gray-600 text-center">support@ostryarecovery.com</p>
            </div>
          </div>
  
          {/* Detalhes adicionais */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700">
              🔹 Ostrya Recovery – Recuperação de Crédito Inteligente, Ética e Eficiente!
            </p>
          </div>
        </div>
      </section>
    );
  }