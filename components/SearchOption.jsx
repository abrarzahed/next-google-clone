import { useRouter } from "next/router";
export default function SearchOption({ title, selected }) {
  const router = useRouter();
  const selectTerm = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };
  return (
    <div
      className={`border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-2 ${
        selected && "border-blue-500 text-blue-500"
      }`}
      onClick={() => selectTerm(title)}
    >
      <p>{title}</p>
    </div>
  );
}
