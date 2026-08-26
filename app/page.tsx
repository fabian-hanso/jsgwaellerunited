import Card from "@/components/shared/Card";
import CarouselPreview from "@/components/shared/Carousel";
import SocialCampagne from "@/components/shared/SocialCampagne";

const cardItems = [
  {
    id: 1,
    headline: "Ehrenamt",
    src: "/FHA07019.jpg",
    badge: "Vereinsleben",
    description: "Erfahre mehr über das Ehrenamt bei uns im Verein.",
    href: "/mannschaft/a-1"
  },
  {
    id: 2,
    headline: "Mannschaften",
    src: "/FHA09200.jpg",
    badge: "Teams",
    description: "Direkt zu den Mannschaften der Jugend Spiel Gemeinschaft.",
    href: "/mannschaften/a-jugend-1"
  },
  {
    id: 3,
    headline: "Ehrenamt",
    src: "/FHA09184.jpg",
    badge: "Vereinsleben",
    description: "Erfahre mehr über das Ehrenamt bei uns im Verein.",
    href: "/mannschaft/a-1"
  },
]

export default function Home() {
  return (
      <main className="bg-white">
        <CarouselPreview />
        <div className="px-6 lg:px-8 mx-auto max-w-7xl py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardItems.map((cardItem) => (
            <Card key={cardItem.id} item={cardItem}/>
          ))}
        </div>
        <SocialCampagne />
      </main>
  );
}
