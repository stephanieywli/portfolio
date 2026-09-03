import Link from "next/link";

const contacts = [
  { platform: "linkedin", link: "https://www.linkedin.com/in/stephanieywli/" },
  { platform: "github", link: "https://github.com/stephanieywli" },
  { platform: "gmail", link: "mailto:stephanieyw.li@gmail.com" },
];

export const Contacts = () => (
  <>
    <p className="font-semibold mb-1 text-sm">Looking for more?</p>{" "}
    <div className="flex flex-col md:flex-row">
      <a
        href="/resume.pdf"
        download="Stephanie_Li_Resume.pdf"
        className="text-sm"
      >
        resume
      </a>
      {contacts.map(({ platform, link }) => (
        <span className="flex flex-row" key={platform}>
          <span className="hidden md:block mx-2">{"·"}</span>
          <Link href={link} target="_blank" className="text-sm">
            {platform}
          </Link>{" "}
        </span>
      ))}
    </div>
  </>
);
