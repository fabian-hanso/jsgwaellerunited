import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function ContactForm() {
  return (
    <div className="isolate bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl text-left px-6 lg:px-8">
        <h2 className="text-balance text-4xl tracking-tight text-gray-900 sm:text-4xl font-bold italic">KONTAKT</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Wir vermitteln dir schnellstmöglich den richtigen Ansprechpartner.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-7xl sm:mt-20 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold italic text-gray-900">
              Vorname
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full bg-white px-3.5 py-2 text-base italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-bold italic text-gray-900">
              Nachname
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full bg-white px-3.5 py-2 text-base italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
              />
            </div>
          </div>

            <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-bold italic text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full bg-white px-3.5 py-2 text-base italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-bold italic text-gray-900">
              Telefon
            </label>
            <div className="mt-2.5">
              <div className="flex bg-white outline outline-1 -outline-offset-1 outline-gray-900 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-900">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none py-2 pl-3.5 pr-7 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                  >
                    <option>+49</option>
                    <option>+43</option>
                    <option>+41</option>
                    <option>+31</option>
                    <option>+48</option>
                    <option>+352</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="Deine Nummer"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base italic text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

            <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-bold italic text-gray-900">
              Betreff
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full bg-white px-3.5 py-2 text-base italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-bold italic text-gray-900">
              Nachricht
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full bg-white px-3.5 py-2 text-base italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                defaultValue={''}
                placeholder='Deine Nachricht an uns ...'
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-gray-900 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full appearance-none focus:outline-none"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
              Meine Daten dürfen zum Zwecke der Bearbeitung gespeichert werden{' '}
              <a href="#" className="whitespace-nowrap font-semibold text-blue-700">
                Datenschutz
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full bg-gray-900 px-3.5 py-2.5 text-center text-sm font-bold italic text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 cursor-pointer"
          >
            Anfrage absenden
          </button>
        </div>
      </form>
    </div>
  )
}
