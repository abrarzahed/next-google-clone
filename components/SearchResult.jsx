import Parser from "html-react-parser";
export default function SearchResult({ results }) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>

      {results.items.map((result) => (
        <div key={result.formattedUrl} className="max-w-2xl mb-8">
          <div className="group">
            <a className="text-sm truncate " href={result.formattedUrl}>
              {result.displayLink}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.formattedUrl}
            >
              <h3 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h3>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
