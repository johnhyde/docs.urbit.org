import React from "react";
import { IntraNav as IntraNavFDS } from "@urbit/fdn-design-system";

const ourSite = {
  title: "Docs",
  href: "https://docs.urbit.org",
};

const sites = [
  {
    title: "Urbit.org",
    href: "https://urbit.org",
    theme: "grn",
  },
  {
    title: "Foundation",
    href: "https://urbit.foundation",
    theme: "mos",
  },
  {
    title: "Network Explorer ↗",
    href: "https://network.urbit.org",
    target: "_blank",
  },
];

const pages = [
  { title: "Language", href: "/language" },
  { title: "Courses", href: "/courses" },
  { title: "Userspace", href: "/userspace" },
  { title: "System", href: "/system" },
  { title: "Tools", href: "/tools" },
  { title: "Manual", href: "/manual" },
  { title: "Guides", href: "/guides" },
  { title: "Overview", href: "/overview" },
  { title: "Reference", href: "/reference" },
];

export default function IntraNav({ search }) {
  return (
    <IntraNavFDS
      ourSite={ourSite}
      sites={sites}
      pages={pages}
      search={search}
    />
  );
}
