import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/atoms/text/quote.css'

function Quote ({ value, author }) {
    return (
        <div className={'quote'}>
            <div className={'quote-quotes'}>«</div>
            <div className={'quote-content'}>
                {value}
                <div className={'quote-author'}>{author}</div>
            </div>
            <div className={'quote-quotes'}>»</div>
        </div>
    )
}
Quote.propTypes = {
    value: PropTypes.string,
    author: PropTypes.string
}
export default Quote
