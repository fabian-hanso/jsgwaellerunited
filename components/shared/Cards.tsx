import { Badge } from "@/components/tailgrids/core/badge";
import { Card } from "@/components/tailgrids/core/card";
import Image from "next/image";

export default function Cards() {
  return (
    <Card className="relative w-full h-100 overflow-hidden rounded-[20px] border-none min-w-0">
      <Image
        src="/FHA09100.jpg"
        alt="Fußball Bild"
        fill
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute left-2 right-2 bottom-2">
        <div className="p-6 rounded-xl bg-[rgba(3,7,18,0.30)] backdrop-blur-lg shadow-lg">
          <Badge className="px-2.5 bg-blue-900 text-white-100 border-0 mb-3 hover:bg-primary-600">
            Mannschaften
          </Badge>
          <h3 className="text-xl font-bold leading-normal text-white-100">
            Everything you need to know About UI/UX Design.
          </h3>
        </div>
      </div>
    </Card>
  );
}
