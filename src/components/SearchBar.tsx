"use client";
import { useEffect, useState } from "react";
import lunr from "lunr";
import { useRouter } from "next/navigation";

// Tipo para os documentos do índice
type SearchDoc = {
  id: string;
  title: string;
  content: string;
  url: string;
};

// Tipo para armazenar o índice Lunr e os dados originais
type SearchIndex = {
  idx: lunr.Index;
  data: SearchDoc[];
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchDoc[]>([]);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then((data: SearchDoc[]) => {
        const idx = lunr(function () {
          this.ref("id");
          this.field("title");
          this.field("content");

          data.forEach((doc) => this.add(doc));
        });
        setIndex({ idx, data });
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    if (!index || !q) {
      setResults([]);
      return;
    }

    const res = index.idx.search(q);
    const matched = res
      .map((r) => index.data.find((doc) => doc.id === r.ref))
      .filter((doc): doc is SearchDoc => !!doc); // garante que o resultado não é undefined

    setResults(matched);
  };

  const handleSelect = (url: string) => {
    setQuery("");
    setResults([]);
    router.push(url);
  };

  return (
    <div className="position-relative">
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <ul className="list-group position-absolute w-100 border rounded search-dropdown">
          {results.map((r) => (
            <li
              key={r.id}
              className="list-group-item list-group-item-action search-dropdown-item"
              onClick={() => handleSelect(r.url)}
            >
              <strong>{r.title}</strong>
              <div className="text-muted" style={{ fontSize: "0.85em" }}>
                {r.content.slice(0, 50)}...
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
