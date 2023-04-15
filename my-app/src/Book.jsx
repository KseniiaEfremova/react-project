// Contains our Book component
function Book({ img, title, author, number }) {

  console.log(number)
    return (

      <article className="book">
        <div>
          <span>
            #{number}
          </span>
        </div>
        <div>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author}</h4>          
        </div>

      </article>
    );
  }
  export default Book;