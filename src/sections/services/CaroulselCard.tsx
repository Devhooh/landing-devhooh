import Image from 'next/image';
import Link from 'next/link';

// Card data interface
interface CardData {
  title: string;
  details: string[];
  color: string;
  icon: string;
}

// Card componente
export default function CaroulselCard ({ card }: { card: CardData }) {
  const getGradientClass = (color: string) => {
    switch (color) {
      case 'indigo':
        return 'bg-gradient-to-br from-indigo-500 to-indigo-700';
      case 'teal':
        return 'bg-gradient-to-br from-teal-500 to-teal-700';
      case 'orange':
        return 'bg-gradient-to-br from-orange-400 to-orange-600';
      default:
        return 'bg-white'; 
    }
  };

  const gradientClass = getGradientClass(card.color);

  return (
    <div
      className={`${gradientClass} p-4 rounded-3xl text-white
      shadow-2xl transform transition-all duration-300 hover:scale-[1.02]
      flex flex-col justify-between h-[850px] table-lg:h-[790px]`}
    >
      <h3 className="text-2xl table-lg:text-3xl font-bold mx-2 my-6  text-center">
        {card.title}
      </h3>
      
      <div className={`p-4 rounded-2xl flex items-center justify-center mb-6 bg-gray-300/30`}>
        <Image
          src={card.icon}
          alt={card.title}
          width={100}
          height={100}
        />
      </div>
      <ul className="list-disc pl-5 text-gray-200 text-xl md-tablet:text-base tablet-md:text-lg table-lg:text-lg flex-grow">
        {card.details.map((detail, i) => (
          <li key={i} className='pb-3'>{detail}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 mt-auto">
        <Link href="/contact">
          <button className="w-full px-6 py-3 bg-white/30 hover:bg-white/40 text-white font-semibold rounded-full transition-colors">
            Cotiza tu proyecto
          </button>
        </Link>
        <Link href="#" className="pb-3">
          <button className="w-full px-6 py-3 border border-white/20 text-white font-semibold rounded-full transition-colors hover:bg-white/10">
            + Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  )
};