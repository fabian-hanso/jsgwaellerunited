import Image from "next/image";

export interface CardItem {
  id: number;
  name: string;
  image: string;
  number: number;
  position: string;
}

interface CardProps {
  item: CardItem;
}

export default function PlayerCard({item}: CardProps) {
  return (
    <div className="block relative w-full aspect-4/5 overflow-hidden border-none min-w-0 bg-gray-100">
      <Image
        src={item.image}
        alt="Fußball Bild"
        fill
        className="object-cover"
      />

        {item.number &&
            <div className="absolute top-2 right-2 text-white font-bold italic text-xl px-2 py-1">{"#" + item.number}</div>
        }

      {/* Overlay Content */}
      <div className="absolute left-2 right-2 bottom-2">
        <div className="p-2">
          <div className="px-2.5 py-0.5 bg-blue-900 text-white italic border-0 mb-1 transition-all w-fit text-sm">
            {item.position}
          </div>
          <h3 className="text-xl font-bold leading-normal italic text-gray-900 bg-white w-fit px-2 py-1">
            {item.name}
          </h3>
          {/* <p className="text-sm text-white italic">{item.description}</p> */}
        </div>
      </div>
    </div>
  );
}
