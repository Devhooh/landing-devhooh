import Image from "next/image";

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center bg-white z-30">
        <Image
          src="/assets/images/noBgBlack.png"
          alt="Cargando Devhoo..."
          width={200}
          height={67} // Proporcional al original
          className="animate-pulse h-auto w-auto"
          loading="lazy"
        />
      </div>
    </div>
  )

}