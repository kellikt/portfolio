"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Hero from "@/components/hero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const useIsVisible = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default function Home() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div
        ref={ref1}
        className={`grid grid-cols-8 gap-x-9 transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="col-span-5">
          <h2
            id="about"
            className="font-heading font-extrabold uppercase text-4xl mb-10"
          >
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
      <div
        ref={ref2}
        className={`py-5 w-full transition-opacity ease-in duration-700 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          id="projects"
          className="font-heading font-extrabold uppercase text-4xl mb-10"
        >
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
      <div
        ref={ref3}
        className={`py-5 w-full transition-opacity ease-in duration-700 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          id="contact"
          className="font-heading font-extrabold uppercase text-4xl mb-10"
        >
          Contact
        </h2>
        <p className="text-xl tracking-wider mb-5">
          MAIL: kelli.tamashiro@gmail.com
        </p>
        <a className="me-3" href="https://github.com/kellikt">
          <FontAwesomeIcon
            className="text-primary-800"
            size="3x"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/kelli-t-46aba4122/">
          <FontAwesomeIcon
            className="text-primary-800"
            size="3x"
            icon={faLinkedin}
          />
        </a>
      </div>
    </main>
  );
}
