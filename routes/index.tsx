export default function Home() {
  return (
    <main>
      <div class="content-container">
        <section id="home">
          <h2>Welcome to My Website</h2>
          <p>
            This is a simple example of a responsive layout using HTML and CSS.
          </p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to creating beautiful and functional
            websites.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required />

            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}
