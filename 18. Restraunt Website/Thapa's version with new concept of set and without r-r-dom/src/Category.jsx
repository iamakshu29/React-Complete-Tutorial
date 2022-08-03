import React from 'react'

const Category = (props) => {
    return (
        <React.Fragment>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        props.catItems.map((elem,index) => {
                            return (
                                <button className="btn btn-warning" key={index} onClick={() => props.filterItem(elem)}>{elem}</button>
                            )
                        })
                    }
                    {/* <button className="btn btn-warning" onClick={() => props.filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => props.filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => props.filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => props.filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Dishdata)}>All</button> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category