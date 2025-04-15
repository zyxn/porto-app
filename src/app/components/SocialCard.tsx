"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinksBox() {
  return (
    <div className="bg-[#0C0B0B] relative h-full w-full grid grid-cols-2 grid-rows-2 gap-[-2] place-items-center">
      <a
        href="https://www.linkedin.com/in/zadosaadi-purwanto-698401207"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-6xl hover:text-blue-500 transition duration-300"
        />
      </a>

      <a
        href="https://www.instagram.com/zadosaadip"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-6xl hover:text-pink-500 transition duration-300"
        />
      </a>

      <a
        href="https://github.com/zyxn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-6xl hover:text-gray-300 transition duration-300"
        />
      </a>

      <a
        href="mailto:zadosaadip08@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-6xl hover:text-red-400 transition duration-300"
        />
      </a>
    </div>
  );
}
