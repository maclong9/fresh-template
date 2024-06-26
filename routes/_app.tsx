import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Layout Example</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <header>
          <div class="container">
            <h1>My Website</h1>
            <nav>
              <ul>
                <li>
                  <a href="/home">Home</a>
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
