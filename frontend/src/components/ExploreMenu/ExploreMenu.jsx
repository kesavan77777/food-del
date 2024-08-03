import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>explore our menu</h1>
            <p className='explore-menu-text'>Food is a necessary nourishment for every living being to survive. Every living creature needs food in addition to clothing and shelter in order to exist. It provides us with energy and makes our bodies capable of functioning proper</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => {
                            setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name);
                        }} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : " "} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
