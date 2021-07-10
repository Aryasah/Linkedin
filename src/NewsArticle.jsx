import React from 'react'
import './Widgets.css'

const NewsArticle=({heading,subtitle,Icon})=>{
    return(<div className="widgets_article">
        <div className="widgets_article_left">
        {Icon && <Icon style={{fontSize:'medium'}}/>}
        </div>
        <div className="widgets_article_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>)
}
export default NewsArticle;