import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="grid grid-cols-8 gap-x-9">
        <div className="col-span-5">
          <h2 className="font-heading font-extrabold uppercase text-4xl mb-10">
            About
          </h2>
          <p className="mb-5">
            Hi, I’m a front-end developer from Honolulu, Hawaii! After
            graduating from the University of Hawaii at Manoa with a degree in
            computer science, I have been working as a Web Design and Support
            Specialist at the University of Hawaii Information Technology
            Services Department. My projects include the Manoa Cascade Template,
            System Cascade Template, and the Username Request Application. In my
            free time, I enjoy drawing, playing Pokemon Go, and finding yummy
            boba shops.
          </p>
          <h3 className="uppercase text-2xl tracking-wider mb-5 text-primary-800">
            Skills
          </h3>
          <ul className="uppercase flex text-primary-800">
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              React JS
            </li>
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              PHP
            </li>
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              Javascript
            </li>
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              CSS
            </li>
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              HTML
            </li>
            <li className="border rounded border-black p-2 w-fit me-3 border-primary-600">
              Apache Velocity
            </li>
          </ul>
        </div>
        <Image
          src="/profile.png"
          alt="Kelli Tamashiro"
          className="dark:invert col-span-3"
          width={500}
          height={24}
          priority
        />
      </div>
      <div className="py-5 w-full">
        <h2 className="font-heading font-extrabold uppercase text-4xl mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-8 gap-x-9">
          <Image
            src="/placeholder.png"
            alt="Kelli Tamashiro"
            className="dark:invert col-span-2"
            width={500}
            height={24}
            priority
          />
          <div className="col-span-6">
            <h3 className="uppercase text-2xl tracking-wider mb-5 text-primary-800">
              Username Request Application
            </h3>
            <p className="mb-10">Short description</p>
            <ul className="uppercase flex">
              <li className="me-5">
                <a className="text-xl border-b-2 border-secondary-800">
                  GitHub
                </a>
              </li>
              <li>
                <a className="text-xl border-b-2 border-secondary-800">Live</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 w-full">
        <h2 className="font-heading font-extrabold uppercase text-4xl mb-10">
          Contact
        </h2>
        <p className="text-xl tracking-wider">
          MAIL: kelli.tamashiro@gmail.com
        </p>
      </div>
    </main>
  );
}
