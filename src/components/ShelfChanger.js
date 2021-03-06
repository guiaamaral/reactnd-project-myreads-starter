import React from 'react';
import PropType from 'prop-types'

const ShelfChanger = ({book, changeShelf}) => (
  <div className="book-shelf-changer">
    <select
      onChange={(event) => changeShelf(book, event.target.value)}
      defaultValue={book.shelf || 'none' }>
    >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

ShelfChanger.propType = {
  book: PropType.object.isRequired,
  changeShelf: PropType.func.isRequired
};

export default ShelfChanger
