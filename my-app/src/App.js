import "./App.css";

function App() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img src="https://books.google.co.uk/books/content?id=jXc38U9NqisC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2FOTAnIVkT9NhHIiCm_2W3M-KizQ&w=1280" />
);
const Title = () => <h2>Book Title</h2>;
const Author = () => <h4>Book Author</h4>;

export default App;
