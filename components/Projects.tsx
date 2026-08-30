const projects = [
  {
    year: 2026,
    feeling: "challenging",
    title: "Entity Resolution Database",
    description:
      "a database of standardized company data and entities; aggregates lobbying, procurement, and ATIP records",
  },
  {
    year: 2026,
    feeling: "creative",
    title: "Odyssey",
    description: "a cozy progress tracker for surviving your job-hunt odyssey",
  },
  {
    year: 2025,
    feeling: "painstaking",
    title: "Canadian Appointments Database",
    description: "Canada's largest public database of government appointments",
  },
  {
    year: 2025,
    feeling: "solo-flying",
    title: "'Open By Default' Processor Frontend",
    description: "solo-built internal CRUD processor for Canadian ATIP records",
  },
  {
    year: 2024,
    feeling: "nostalgic",
    title: "stephaniey.li",
    description: "take a trip down memory lane...",
  },
];

export const Projects = () => (
  <div className="flex flex-col gap-2">
    {projects.map(({ title, description, year, feeling }) => (
      <div key={title}>
        <p className="text-xs bg-black w-fit text-off-white px-1 font-semibold my-1">
          ({feeling})
        </p>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    ))}
  </div>
);
