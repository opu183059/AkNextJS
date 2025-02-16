import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black/10">
      <div className="py-10 container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="text-center mb-3">
          ©{currentYear} Aktheruzzaman. All rights reserved
        </div>
        <div className="flex gap-4 justify-center">
          <p>Follow Me on:</p>
          <a
            href="https://www.linkedin.com/in/akther-uz-zaman-852827278/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={25} className="text-sky-500"></AiFillLinkedin>
          </a>
          <a
            href="https://github.com/opu183059"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={25}></AiFillGithub>
          </a>
          <a
            href="https://www.facebook.com/opu.fahim"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook
              size={25}
              className="text-blue-500"
            ></AiFillFacebook>
          </a>

          <a aria-label="Chat on WhatsApp" href="https://wa.me/01521227899">
            <AiOutlineWhatsApp
              size={25}
              className="text-green-600"
            ></AiOutlineWhatsApp>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
