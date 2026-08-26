import PlayerCard from "@/components/shared/PlayerCard";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const teamData = {
    players: [],
    teamName: "A-Jugend I",
    teamDetails: {
        trainings: [
            {
                id: 1,
                weekday: "MO",
                startTime: "19:00 Uhr",
                endTime: "20:30 Uhr",
                location: "Sportplatz Heiligenroth"
            },
            {
                id: 2,
                weekday: "DO",
                startTime: "19:00 Uhr",
                endTime: "20:30 Uhr",
                location: "Sportplatz Ruppach-Goldhausen"
            },
        ],
        contactPersons: [
            {
                id: 1,
                personName: "Batuhan Zeybek",
                personPhone: "0171 / 2791010",
                personMail: "",
                type: "Trainer"
            },
            {
                id: 2,
                personName: "Carlos Bauch",
                personPhone: "0152 / 07805913",
                personMail: "",
                type: "Co-Trainer"
            },
        ]
    },
    teamPlayers: {
        goalkeepers: [
            {
                id: 1,
                number: 30,
                name: "Marius Auler",
                position: "Torhüter",
                image: "/Marius.jpg"
            },
            {
                id: 2,
                number: 1,
                name: "Tim Köhn",
                position: "Torhüter",
                image: "/Tim.jpg"
            },
        ],
        fieldPlayers: [
            {
                id: 1,
                number: 8,
                name: "Nils Exner",
                position: "Stürmer",
                image: "/Nils.jpg"
            },
            {
                id: 2,
                number: 13,
                name: "Henry Ortseifen",
                position: "Stürmer",
                image: "/Henry.jpg"
            }
        ]
    }
}

export default function Home() {
  return (
      <main className="bg-white">
        <div className="bg-background-50 flex items-center justify-center relative aspect-3/2 lg:aspect-5/2 lg:max-h-[calc(100vh-80px)] overflow-hidden">
            <img src="/A-Team.jpg" alt="" className="w-full h-full object-cover object-top" />
        </div>

        <div className="mx-auto max-w-7xl text-left pt-24 px-6 lg:px-8">
            <h2 className="text-balance text-4xl tracking-tight text-gray-900 sm:text-4xl font-bold italic">A-JUGEND I</h2>
            <p className="mt-1 text-lg/8 italic text-gray-900">Rheinlandliga</p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <h2 className="text-gray-900 font-bold italic text-xl">MANNSCHAFT</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                <div className="order-1 lg:order-1 lg:col-span-2 text-gray-900 grid geid-cols-1 md:grid-cols-2 gap-6">
                    {teamData.teamPlayers.goalkeepers.map((player) => (
                        <PlayerCard item={player} key={player.id}/>
                    ))}

                    {teamData.teamPlayers.fieldPlayers.map((player) => (
                        <PlayerCard item={player} key={player.id}/>
                    ))}
                </div>
                <div className="order-2 lg:order-2 w-full h-auto lg:sticky lg:top-36 lg:self-start text-gray-900 p-4 border border-blue-900">
                    <p className="font-bold italic text-sm/6">TRAININGSTAGE:</p>

                    <div className="flex flex-col gap-6 mt-4 mb-4">
                        {teamData.teamDetails.trainings.map((training) => (
                            <div key={training.id} className="w-full flex">
                                <div className="h-16 w-10 bg-blue-900 flex justify-center items-center">
                                    <p className="text-white font-bold italic -rotate-90">
                                        {training.weekday}
                                    </p>
                                </div>
                                <div className="w-full pl-4 bg-gray-100 h-auto flex flex-col justify-center">
                                    <p className="font-bold text-sm/6">{training.location}</p>
                                    <p className="text-sm/6">{training.startTime + " - " + training.endTime}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="font-bold italic text-sm/6">ANSPRECHPARTNER:</p>

                    <div className="flex flex-col gap-6 mt-4">
                        {teamData.teamDetails.contactPersons.map((person) => (
                            <div key={person.id} className="w-full flex">
                                <div className="h-16 w-10 bg-blue-900 flex justify-center items-center">
                                    <p className="text-white font-bold italic -rotate-90">
                                        {person.id}
                                    </p>
                                </div>
                                <div className="w-full pl-4 bg-gray-100 h-auto flex flex-col justify-center">
                                    <p className="font-bold text-sm/6">{person.personName + " (" + person.type + ")"}</p>
                                    <a href={"tel:" + person.personPhone} className="text-sm/6 hover:text-blue-900">{person.personPhone}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <dl className="mt-6 lg:mt-24 divide-y divide-gray-900/10">
              <Disclosure as="div" className="first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 bg-gray-100 p-5 cursor-pointer">
                    <span className="text-base/7 font-semibold italic">Spielplan</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="" unmount={false}>
                    <div className="fussballde_widget" data-id="5e25efa9-ff80-4720-8b74-8a2058e970a2" data-type="team-matches" style={{ width: "100%" }}></div>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 bg-gray-100 p-5 cursor-pointer">
                    <span className="text-base/7 font-semibold italic">Tabelle</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="" unmount={false}>
                    <div className="fussballde_widget" data-id="141ccee6-0751-49d5-b668-18619f3300e4" data-type="table" style={{ width: "100%" }}></div>
                </DisclosurePanel>
              </Disclosure>
          </dl>

        </div>
      </main>
  );
}
