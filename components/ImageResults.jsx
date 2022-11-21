import Pagination from "./Pagination";

export default function ImageResults({ results }) {
  return (
    <div className="mt-6 mb-12">
      <div className="grid mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {results.items?.map((result, i) => (
          <div className="text-gray-600" key={i}>
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="w-full rounded-md h-60 object-cover group-hover:shadow-xl"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h4 className="text-2xl my-2 truncate">{result.title}</h4>
              </a>
              <a className="truncate" href={result.image.contextLink}>
                <p>{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
