import Image from "next/image";

export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
        src="/assets/images/noBgBlack.png"
        alt="Cargando-Devhoo..."
        width={200}
        height={100}
        style={{height: "auto", width: "auto  "}}
        className="animate-pulse"
      />
    </div>
  )

}