import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppHeader() {
  const router = useRouter();
  return (
    <header className="p-6 container mx-auto flex justify-between text-sm text-gray-700">
      <div className="header-left flex gap-4 items-center">
        <a href="https://about.google.com/" className="link">
          About
        </a>
        <a href="https://store.google.com/" className="link">
          Store
        </a>
      </div>
      <div className="header-right flex gap-4 items-center">
        <a href="https://mail.google.com" className="link">
          Gmail
        </a>
        <p
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Images
        </p>
        <User />
      </div>
    </header>
  );
}
