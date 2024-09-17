const BookCards = (props) => {
  const { details } = this.props;
  const { authorName, title, publishedDate } = details;
  return (
    <div>
      <h1>{title}</h1>
      <p>{authorName}</p>
      <p>{publishedDate}</p>
    </div>
  );
};

export default BookCard;
