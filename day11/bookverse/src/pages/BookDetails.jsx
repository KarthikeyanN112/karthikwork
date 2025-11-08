import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../utils/api";
import AuthorInfo from "../components/AuthorInfo";

class BookDetailsClass extends Component {
  state = { book: null };

  async componentDidMount() {
    const book = await getBookById(this.props.id);
    this.setState({ book });
    console.log("Book data loaded:", book);
  }

  render() {
    const { book } = this.state;
    if (!book) return <p>Loading...</p>;
    return (
      <div>
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> ₹{book.price}</p>
        <AuthorInfo author={book.author} bio={book.bio} />
      </div>
    );
  }
}

export default function BookDetails() {
  const { id } = useParams();
  return <BookDetailsClass id={id} />;
}
