import React, { Component } from "react";

export default class AuthorInfo extends Component {
  componentDidMount() {
    console.log("AuthorInfo loaded:", this.props.author);
  }

  render() {
    const { author, bio } = this.props;
    const topBooks = [
      `${author}'s Notebook`,
      `${author} Reloaded`,
      `${author} Legacy`,
    ];
    return (
      <div className="card p-3 mt-3">
        <h4>About {author}</h4>
        <p>{bio}</p>
        <h6>Top 3 Books:</h6>
        <ul>
          {topBooks.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    );
  }
}
