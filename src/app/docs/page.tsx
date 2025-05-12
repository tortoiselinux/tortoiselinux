import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="container">
        <ul>
          <li>
            <Link href="/docs/installation_guide">Installation Guide</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
