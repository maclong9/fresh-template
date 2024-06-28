import { type PageProps } from "$fresh/server.ts";
import SEO from "@/components/layout/SEO.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <SEO
          site="Website"
          url={url}
          description="Welcome to my template site"
          keywords="site, things"
          ogImage="/og.webp"
          twitterHandle="@twitterhandle"
        />
      </head>
      <body>
        <header>
          <div class="container">
            <a href="/">
              <h1>Website</h1>
            </a>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Component />
        </main>

        <footer>
          <div class="container">
            <p>&copy; 2024 My Website. All rights reserved.</p>
            <p class="faded">Designed with OKLCH colors</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
