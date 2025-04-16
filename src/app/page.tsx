"use client";
// import Image from "next/image";
import { Clock } from "./clock";
import Link from "next/link";
import { useState } from "react";
import SocialCard from "./components/SocialCard";
import ContactUs from "./components/ContactUs";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Image,
  CardBody,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faRust,
  faJava,
  faJs,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription:
      "Platform e-commerce modern dengan fitur pembayaran terintegrasi.",
    longDescription:
      "Platform e-commerce yang dibangun dengan React.js dan Node.js, menampilkan produk dengan UI yang menarik, sistem keranjang belanja, dan integrasi dengan berbagai metode pembayaran. Proyek ini meningkatkan konversi penjualan hingga 35% untuk klien kami.",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 2,
    title: "Health Tracking App",
    shortDescription: "Aplikasi pelacak kesehatan dan kebugaran personal.",
    longDescription:
      "Aplikasi mobile untuk memonitor aktivitas fisik, asupan nutrisi, dan pola tidur. Dibangun dengan React Native dan Firebase, memiliki fitur sinkronisasi dengan wearable devices dan dashboard analitik untuk melihat perkembangan pengguna.",
    imageUrl:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 3,
    title: "Corporate Website",
    shortDescription: "Website perusahaan dengan desain responsif dan modern.",
    longDescription:
      "Website perusahaan yang sepenuhnya responsif dengan CMS custom untuk memudahkan update konten. Mengimplementasikan teknik SEO on-page yang meningkatkan traffic organik sebesar 120% dalam 3 bulan pertama.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 4,
    title: "Task Management Tool",
    shortDescription: "Alat kolaborasi tim untuk manajemen proyek.",
    longDescription:
      "Aplikasi web untuk manajemen tugas dengan fitur kolaborasi real-time, timeline proyek, dan integrasi dengan Google Calendar. Dibangun dengan Vue.js dan Express.js, membantu tim meningkatkan produktivitas hingga 40%.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 5,
    title: "Food Delivery Service",
    shortDescription:
      "Layanan pesan antar makanan dengan rekomendasi personal.",
    longDescription:
      "Platform pesan makanan online dengan sistem rekomendasi berbasis AI yang mempelajari preferensi pengguna. Fitur termasuk tracking pesanan real-time, ulasan restoran, dan program loyalitas. Meningkatkan retensi pengguna sebesar 65%.",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 6,
    title: "Educational Platform",
    shortDescription: "Platform pembelajaran online dengan konten interaktif.",
    longDescription:
      "Sistem manajemen pembelajaran (LMS) dengan video kursus, kuis interaktif, dan sertifikasi online. Mendukung lebih dari 10,000 pengguna simultan dengan infrastruktur yang scalable. Dibangun dengan MERN stack (MongoDB, Express, React, Node.js).",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
  },
];

export default function Home() {
  const now = new Date();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <>
      <div
        className="bg-[url('/img/bg1.jpg')] bg-cover bg-center opacity-55 absolute inset-0 z-0 bg-fixed"
        id="main"
      ></div>
      <nav className="grid grid-cols-3 h-[10vh] px-8 font-bold text-lg z-40 relative sticky top-0 backdrop-blur-sm">
        <ul className="h-full flex">
          <li className="my-auto">
            <Image src="/img/logo.png" alt="logo" />
          </li>
        </ul>
        <ul className="mx-auto flex gap-4 h-full">
          <li className="my-auto hover:text-[#27AE8E] duration-300">
            <Link href="#main">Main</Link>
          </li>
          <li className="my-auto hover:text-[#27AE8E] duration-300">
            <Link href="#about">About</Link>
          </li>
          <li className="my-auto hover:text-[#27AE8E] duration-300">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="my-auto hover:text-[#27AE8E] duration-300">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <section className="z-10 relative h-[90vh] flex">
        <div className="grid grid-cols-2 mx-auto my-auto gap-20 -translate-y-1/4">
          <div className="my-auto font-bold text-4xl">
            <h1>Hello,</h1>
            <h1>
              I am <span className="text-[#27AE8E] italic">Zadosaadi</span>
            </h1>
            <h1>Data Scientist</h1>
          </div>
          <div>
            <Image removeWrapper src="/img/intro-face.png" alt="logo" />
          </div>
        </div>
      </section>

      <section className="z-10 relative h-screen flex" id="about">
        <div
          className="bg-[url('/img/bg2.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed"
          id="main"
        ></div>

        <div className="grid grid-cols-8 grid-rows-8 gap-2 mx-auto my-auto h-[80vh] w-[85vw] relative">
          <div className="col-span-3 row-span-6">
            <Card
              isPressable
              shadow="sm"
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
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/img/gigachad.png"
              />
            </Card>
          </div>
          <Card
            isPressable
            shadow="sm"
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
          <div className="col-span-4 row-span-4 col-start-4 row-start-1 border-8 border-[#0C0B0B] rounded-lg">
            <Card className="bg-[#0C0B0B]  h-full w-full shadow-none rounded-none">
              <h1 className="text-4xl font-bold mx-4 my-4">
                Hi I am <span className="text-[#27AE8E]">Zadosaadi</span>
              </h1>
              <p className="text-justify my-4 line-clamp-5 lg:line-clamp-none line-clamp-6 mx-4 my-4">
                Fresh graduate passionate about Machine Learning & AI, with
                hands-on experience in Python, SQL, API development, PySpark,
                and Cloud ML (GCP). Successfully completed multiple projects in
                ML model deployment, data science, and AI applications. Skilled
                in problem- solving, critical thinking, and public speaking.
                Seeking opportunities to contribute and grow in the AI/ML
                industry.
              </p>
            </Card>
          </div>
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
          <div className="row-span-2 col-start-7 row-start-5 border-8 border-[#0C0B0B] rounded-lg">
            <Card className="bg-[#0C0B0B] h-full w-full shadow-none rounded-none relative">
              <Clock time={now.getTime()} />
              <p className="italic opacity-50 absolute inset-x-0 bottom-0 mx-2 my-2">
                GMT +7
              </p>
            </Card>
          </div>
          <div className="col-span-4 row-span-2 col-start-3 row-start-7 border-8 border-[#0C0B0B] rounded-lg">
            <Card className="bg-[#0C0B0B]  h-full w-full shadow-none rounded-none relative">
              <div className="grid grid-cols-2">
                <p className="text-2xl font-bold mx-2 my-10">Stack</p>
                <ul className="flex flex-auto flex-row gap-6 mx-2 my-10 text-4xl">
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
          <div className="col-span-2 row-span-2 col-start-7 row-start-7 border-8 border-[#0C0B0B] rounded-lg">
            <div className="bg-[#0C0B0B] relative h-full w-full">
              Projects Highlights
            </div>
          </div>
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
          <div className="row-span-2 col-start-8 row-start-1 border-8 border-[#0C0B0B] rounded-lg">
            <div className="bg-[#0C0B0B] relative h-full w-full">
              <SocialCard />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative h-screen flex flex-col justify-center items-center"
        id="projects"
      >
        {/* Background blur image */}
        <div className="bg-[url('/img/bg1.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed" />

        {/* Horizontal scrollable cards */}
        <div className="relative z-10 w-full overflow-x-auto">
          <div className="flex snap-x snap-mandatory space-x-6 px-10 py-10 w-max">
            {projects.map((project) => (
              <div key={project.id} className="snap-center">
                <Card className="min-w-[300px] max-w-[300px] h-[450px] transition-transform transform hover:scale-105">
                  <CardHeader className="flex flex-col items-start pb-0">
                    <p className="font-bold text-lg">{project.title}</p>
                    <p className="text-tiny text-default-500">
                      Project #{project.id}
                    </p>
                  </CardHeader>

                  <CardBody className="overflow-visible py-2">
                    <Image
                      isZoomed
                      as="img"
                      width="100%"
                      height={200}
                      alt={project.title}
                      src={project.imageUrl}
                      className="w-full object-cover rounded-lg"
                    />
                    <p className="text-sm mt-3 line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </CardBody>

                  <CardFooter className="flex justify-end">
                    <Button
                      size="sm"
                      onPress={() => setActiveProject(project)}
                      className="cursor-pointer"
                    >
                      More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Spotlight Modal dengan Animasi */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-2xl w-full relative mx-4"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {activeProject.title}
                </h2>
                <Image
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <p className="mb-6">{activeProject.longDescription}</p>
                <Button onClick={() => setActiveProject(null)}>Close</Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section
        className="relative h-screen flex flex-col justify-center items-center"
        id="contacts"
      >
        {/* Background blur image */}
        <div className="bg-[url('/img/bg2.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed" />
        <ContactUs />
      </section>
    </>
  );
}
