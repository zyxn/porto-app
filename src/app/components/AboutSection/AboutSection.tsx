"use client";

import { Card } from "@/app/components/ui/Card";
import { CardHeader, Image } from "@nextui-org/react";
import { Clock } from "../common/Clock";
import SocialCard from "../common/SocialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faRust,
  faJava,
  faJs,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {
  return (
    <section className="z-10 relative h-screen flex" id="about">
      <div
        className="bg-[url('/img/bg2.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed"
        id="main"
      ></div>

      <div className="grid grid-cols-8 grid-rows-8 gap-2 mx-auto my-auto h-[80vh] w-[85vw] relative">
        {/* Profile Card */}
        <div className="col-span-3 row-span-6">
          <Card
            isPressable
            onPress={() => console.log("item pressed")}
            className="bg-[#0C0B0B] relative h-full w-full  border-8 border-[#0C0B0B] rounded-lg"
          >
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Myself :D
              </p>
              <h4 className="text-white font-medium text-large">2025</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Profile"
              className="z-0 w-full h-full object-cover"
              src="/img/gigachad.png"
            />
          </Card>
        </div>

        {/* Skills Card (Small) */}
        <Card
          isPressable
          className="col-span-2 row-span-2 col-start-1 row-start-7 border-8 border-[#0C0B0B] rounded-lg text-left"
        >
          <div className="bg-[#0C0B0B]  h-full w-full shadow-none rounded-none">
            <h1 className="text-xl font-bold">Skills</h1>
            <ul className="text-sm">
              <li>Data Science</li>
              <li>AI Development</li>
              <li>Cloud Architect</li>
              <li>Fullstack Developer</li>
            </ul>
          </div>
        </Card>

        {/* About Text Card */}
        <div className="col-span-4 row-span-4 col-start-4 row-start-1 border-8 border-[#0C0B0B] rounded-lg">
          <Card className="bg-[#0C0B0B] h-full w-full shadow-none rounded-none">
            <h1 className="text-4xl font-bold mx-4 my-4">
              Hi I am <span className="text-[#27AE8E]">Zadosaadi</span>
            </h1>
            <p className="text-justify my-4 line-clamp-5 lg:line-clamp-none mx-4">
              Fresh graduate passionate about Machine Learning & AI, with
              hands-on experience in Python, SQL, API development, PySpark, and
              Cloud ML (GCP). Successfully completed multiple projects in ML
              model deployment, data science, and AI applications. Skilled in
              problem-solving, critical thinking, and public speaking. Seeking
              opportunities to contribute and grow in the AI/ML industry.
            </p>
          </Card>
        </div>

        {/* Skills Card (Medium) */}
        <div className="col-span-3 row-span-2 col-start-4 row-start-5 border-8 border-[#0C0B0B] rounded-lg">
          <Card className="bg-[#0C0B0B]  h-full w-full shadow-none rounded-none relative">
            <h1 className="text-2xl font-bold my-2">Skills</h1>
            <ul className="text-sm grid grid-cols-2 gap-x-1 gap-y-0.5">
              <li>Data Analysis</li>
              <li>AI Development</li>
              <li>Cloud Architect</li>
              <li>Fullstack Developer</li>
            </ul>
          </Card>
        </div>

        {/* Clock Card */}
        <div className="row-span-2 col-start-7 row-start-5 border-8 border-[#0C0B0B] rounded-lg">
          <Card className="bg-[#0C0B0B] h-full w-full shadow-none rounded-none relative">
            <Clock />
            <p className="italic opacity-50 absolute inset-x-0 bottom-0 mx-2 my-2">
              GMT +7
            </p>
          </Card>
        </div>

        {/* Tech Stack Card */}
        <div className="col-span-4 row-span-2 col-start-3 row-start-7 border-8 border-[#0C0B0B] rounded-lg">
          <Card className="bg-[#0C0B0B] h-full w-full shadow-none rounded-none relative">
            <div className="grid grid-cols-2 h-full">
              <p className="text-2xl font-bold mx-2 my-auto">Stack</p>
              <ul className="flex flex-auto flex-row gap-6 mx-2 my-auto text-4xl">
                <li>
                  <FontAwesomeIcon icon={faGolang} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPython} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faRust} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faJava} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} />
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Projects Highlights */}
        <div className="col-span-2 row-span-2 col-start-7 row-start-7 border-8 border-[#0C0B0B] rounded-lg">
          <div className="bg-[#0C0B0B] relative h-full w-full p-4">
            <h2 className="text-xl font-semibold">Projects Highlights</h2>
          </div>
        </div>

        {/* Career Paths */}
        <div className="row-span-4 col-start-8 row-start-3 border-8 border-[#0C0B0B] rounded-lg">
          <div className="bg-[#0C0B0B] relative h-full w-full text-white">
            <h2 className="text-xl font-semibold">Carrer Paths</h2>
            <ul className="my-2 text-md font-bold divide-y divide-gray-600">
              <li className="py-2">
                Freelance
                <span className="italic text-sm block">Jul 2022 - Now</span>
              </li>
              <li className="py-2">
                Undergraduate Student
                <span className="italic text-sm block">
                  Sep 2021 - Jan 2025
                </span>
              </li>
              <li className="py-2">
                Data Science Intern
                <span className="italic text-sm block">
                  Jul 2024 - Oct 2024
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Card */}
        <div className="row-span-2 col-start-8 row-start-1 border-8 border-[#0C0B0B] rounded-lg">
          <div className="bg-[#0C0B0B] relative h-full w-full">
            <SocialCard />
          </div>
        </div>
      </div>
    </section>
  );
}
