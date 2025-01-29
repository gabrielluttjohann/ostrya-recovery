import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="bg-pale-green p-3 flex items-center justify-center">
      <div className="container mx-auto text-white flex items-center justify-between">
        <img className="object-fill w-32 h-auto" src={logo.src} alt="" />
        <nav>
          <ul className="flex gap-3">
            <li className="">Quem Somos</li>
            <li>Serviços</li>
            <li>Fale Conosco</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
