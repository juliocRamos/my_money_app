import React from 'react'

export default (props) => {
    return (
        <section className = 'content-header'>
            <h1>{props.title} <small>{props.subtitle}</small></h1>
        </section>
    )
}