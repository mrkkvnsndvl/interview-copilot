import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function FooterSettings() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="flex flex-row items-center justify-between px-6">
      <p className="text-base">
        © {getYear} Interview Copilot by mrkkvnsndvl.
      </p>
      <div className="flex flex-row gap-x-3">
        <Link to="/">
          <IconBrandDiscord className="w-6 h-6" />
        </Link>
        <Link to="/">
          <IconBrandFacebook className="w-6 h-6" />
        </Link>
        <Link to="/">
          <IconBrandGithub className="w-6 h-6" />
        </Link>
        <Link to="/">
          <IconBrandInstagram className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}
