import { Component } from "react";
import BookCards from './BookCards'

class DisplayBooks extends Component {
  componentDidMount() {
    this.displayBooks();
  }

  state = { BooksData: [] };
  displayBooks = async () => {
    const url = "https://openlibrary.org/search.json?q=<your-query>";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = response.json();
    console.log(data);
    const updatedData = data.docs.map((each) => {
      title:each.title,
      authorName: each.author_name;
      publishedDate:each.published_date

    });
    this.setState({ booksData: updatedData });
  };
  render() {
    const {booksData}=this.state
    return (
      <div>
        <h1>Book Search Application</h1>
        <p>You Can Find Any Book Details Here :)</p>
        <input type="search" />
        <button>Search</button>
        <ul>
          {booksData.map((each)=><BookCards details={each}/>)}
      </div>
    );
  }
}

export default DisplayBooks;
