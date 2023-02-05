import React from 'react'
import "./CTA.css"

const CTA = (props) => {
    return (
    <div className="cta">
    {
        (props.ctaArr[0].download)?
        <a href={props.ctaArr[0].href} download>{props.ctaArr[0].title}</a>
        :
        <a href={props.ctaArr[0].href}>{props.ctaArr[0].title}</a>
    }
    {
        (props.ctaArr[1].download)?
        <a href={props.ctaArr[1].href} download>{props.ctaArr[1].title}</a>
        :
        <a href={props.ctaArr[1].href}>{props.ctaArr[1].title}</a>
    }
    </div>
    )
}

export default CTA