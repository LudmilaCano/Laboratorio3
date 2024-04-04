import React from 'react'
import PropTypes from 'prop-types';
import './BookItem.css'

export const BookItem = ({title, author, pageCount, rating}) => {

    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{rating.length} estrellas</div>
            <p>{pageCount} páginas</p>
        </div>
    );
};

//tipado de los prop
BookItem.PropTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
};

export default BookItem