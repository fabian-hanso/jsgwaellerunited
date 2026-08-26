import Image from "next/image";

export interface CardItem {
  id: number;
  headline: string;
  src: string;
  badge: string;
  description: string;
  href: string;
}

interface CardProps {
  item: CardItem;
}

export default function Card({item}: CardProps) {
  return (
    <a href={item.href} className="block relative group w-full h-115.5 overflow-hidden border-none min-w-0">
      <Image
        src={item.src}
        alt="Fußball Bild"
        fill
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute left-2 right-2 bottom-2">
        <div className="p-6 bg-[rgba(3,7,18,0.30)] backdrop-blur-sm group-hover:backdrop-blur-lg shadow-lg group-hover:py-10 transition-all">
          <div className="px-2.5 py-0.5 bg-blue-900 text-white italic border-0 mb-3 transition-all w-fit text-sm">
            {item.badge}
          </div>
          <h3 className="text-xl font-bold leading-normal italic text-white">
            {item.headline}
          </h3>
          <p className="text-sm text-white italic">{item.description}</p>
        </div>
      </div>
    </a>
  );
}
