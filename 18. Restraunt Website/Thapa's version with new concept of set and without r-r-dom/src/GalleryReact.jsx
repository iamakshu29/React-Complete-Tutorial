import React, { useState } from 'react'
import "./index.css";
import Dishdata from "./Dishdata";
import MenuItems from './MenuItems';
import Category from './Category';

const allValues = [...new Set(Dishdata.map((elem) => {return elem.category;})),'all'];


const GalleryReact = () => {

    const [items, setItems] = useState(Dishdata);
    const[catItems,setCatItems] = useState(allValues);

    const filterItem = (categItem) => {
        if(categItem==='all'){
            setItems(Dishdata);
            return;
        }

        const updatedItems = Dishdata.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }

    return (
        <React.Fragment>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            <Category filterItem={filterItem} catItems={catItems} />
            <MenuItems items={items} />
        </React.Fragment>
    )
}

export default GalleryReact;