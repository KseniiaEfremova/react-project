import "./App.css";

import EventExample from "./EventExample";
import bookArray from "./books";
import Book from "./Book";
import Title from "./Title";

function App() {
  return (
    <div>
      <Title />
      <section className="booklist">
        <EventExample />
        {bookArray.map((book, index) => {
          const { img, title, author, id } = book;

          return <Book key={index} img={img} title={title} author={author} number={id} />;
        })}
      </section>      
    </div>

  );
}

export default App;