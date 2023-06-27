import Image from "next/image"

const WhyUs = () => (
  <div className="flex mb-[100px]">
    <div className="w-[100%] lg:w-[50%]  flex justify-between">
      <div className="w-[20%] h-[152px] relative">
        <Image
          src="/proyect2.png"
          alt="escalera"
          layout="fill"
        />
      </div>
      <div className="w-[70%] h-[520px] relative">
        <Image
          src="/bath.png"
          alt="escalera"
          layout="fill"
        />
      </div>
    </div>
    <div className="w-[50%] border-l-[60px] border-l-dk-secondary p-[26px] pr-[76px] hidden lg:block">
      <span className="text-[22px] font-medium">¿Por que escogernos?</span>
      <p className="text-[#9A9A9A] text-[14px] mt-[54px]">En nuestra empresa, nuestro objetivo principal es alcanzar un crecimiento continuo y sostenible. Nos esforzamos por brindar servicios de calidad que no solo satisfagan las necesidades de nuestros clientes, sino que también tengan un impacto positivo en nuestro entorno natural.

        Creemos firmemente en la importancia de preservar y proteger el medio ambiente para las generaciones futuras. Es por eso que trabajamos arduamente para reducir nuestro impacto ambiental y fomentar prácticas sostenibles en todas nuestras operaciones.

        Nuestro sueño es ofrecer nuestros servicios en todo el territorio nacional, llevando nuestra visión de un futuro más verde y azul a cada rincón del país. Nos esforzamos por construir una empresa que no solo sea rentable, sino que también tenga un propósito más grande: crear un mundo más sostenible y habitable para todos.

        Estamos comprometidos con nuestra misión y trabajamos incansablemente para alcanzar nuestros objetivos. Nos enorgullece saber que, con cada paso que damos hacia adelante, estamos haciendo una diferencia positiva en el mundo y creando un futuro mejor para todos.
      </p>
    </div>
  </div>
)

export default WhyUs