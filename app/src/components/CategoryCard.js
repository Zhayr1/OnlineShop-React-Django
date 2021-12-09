import React from 'react'
import { Link } from 'react-router-dom'

export function CategoryCard(props) {

    return (
        <div className={props.class + ' scale-btn'}>
            <Link to={props.link} className='link-container'>
            <div className="card-panel center">
                <i className="material-icons large primary-text">{props.icon}</i>
                <h4 className='black-text'>{props.text}</h4>
            </div>
            </Link>
        </div>
    )
}