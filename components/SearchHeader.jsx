import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const clearInput = () => {
    searchInputRef.current.value = "";
  };
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Image
          width="140"
          height="80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google logo"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex border hover:shadow-xl rounded-full px-5 py-4 gap-5 items-center justify-between">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full min-w-[440px] jus focus:outline-none"
          />
          <XMarkIcon
            onClick={clearInput}
            className="h-7 cursor-pointer mr-1 text-gray-600"
          />
          <MicrophoneIcon className="h-6 cursor-pointer text-blue-500 border-l-2 pl-1" />
          <MagnifyingGlassIcon className="h-6 cursor-pointer text-blue-500" />
          <button onClick={search} hidden></button>
        </form>

        <User className="" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
