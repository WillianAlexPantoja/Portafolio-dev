import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
      <>
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
          <div className="max-w-[450px]">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis <span className="font-bold text-secondary"> servicios.</span>
            </h1>
            <p className="mb-3 text-xl text-gray-300">
              Ofrezco servicios de desarrollo web frontend especializados en la
              creación de sitios web y aplicaciones atractivas y funcionales.
              Utilizando las últimas tecnologías, como HTML, CSS y JavaScrip,
              React, Node, Angular, Vue y MongoDB, diseño interfaces de usuario
              intuitivas y responsivas que reflejan la identidad de marca de los
              clientes y mejoran su presencia en línea.
            </p>
            <a
              href="https://wa.me/+573215020013?text=Hola%2C%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 inline-block"
            >
              Contacta conmigo
            </a>
          </div>

          {/* SLIDER */}
          <div>
            <SliderServices />
          </div>
        </div>
      </>
    );
}

export default ServicesPage;