import "./App.css";

// Define our bookOne and bookTwo objects with
// respective values.

const bookArray = [
  {
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/41X65pro2mS._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    title: "The Wasp Factory",
    author: "Iain Banks",
    id: 2,
  },
];

function App() {
  return (
    <section className="booklist">
      <EventExample />
      {bookArray.map((book) => {
        const { id, img, title, author } = book;
        return <Book key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const EventExample = () => {
  // Define our event handlers here
  const handleFormInput = (event) => {
    console.log(event.target.value, event.target.name);
  };

  const handleClick = (event) => {
    console.log("Button Clicked!", event.target);
  };

  const handleSubmit = (e) => {
    // Prevent the default behaviour of form submission
    e.preventDefault();
    console.log("Form submitted", e);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Some Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {console.log(e.target.value)}}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit Form</button>
      </form>
      <button onClick={handleClick}>Click Me!</button>
    </section>
  );
};

// Destructuring the props object in parentheses
function Book({ img, title, author, children }) {
  return (
    <article className="book">
      {/** Use the destructured props here */}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* Place your children prop here */}
      {children}
    </article>
  );
}

export default App;
