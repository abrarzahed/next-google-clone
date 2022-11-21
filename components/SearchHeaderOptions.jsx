import SearchOption from "./SearchOption";
import { useRouter } from "next/router";
export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="border-b">
      <div className="flex gap-8 select-none text-sm text-gray-700 max-w-5xl mx-auto">
        <SearchOption
          title="All"
          selected={router.query.searchType == "" || !router.query.searchType}
        />
        <SearchOption
          title="Images"
          selected={router.query.searchType == "image"}
        />
      </div>
    </div>
  );
}
