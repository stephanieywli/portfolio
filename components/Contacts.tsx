import Link from "next/link";

const contacts = [
  { platform: "linkedin", link: "https://www.linkedin.com/in/stephanieywli/" },
  { platform: "github", link: "https://github.com/stephanieywli" },
  { platform: "gmail", link: "mailto:stephanieyw.li@gmail.com" },
];

export const Contacts = () => (
  <>
    <p className="font-semibold mb-1 text-sm">Looking for more?</p>{" "}
    <div className="flex flex-row gap-3">
      <a
        href="/resume.pdf"
        download="Stephanie_Li_Resume.pdf"
        className="text-sm"
      >
        resume
      </a>{" "}
      {" · "}{" "}
      {contacts.map(({ platform, link }) => (
        <span key={platform}>
          <Link href={link} key={platform} target="_blank" className="text-sm">
            {platform}
          </Link>{" "}
          {platform !== "gmail" && " · "}
        </span>
      ))}
    </div>
  </>
);
