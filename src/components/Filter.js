const Filter = ({showCategory, setShowCategory, useClues, category}) => {

    const HandleShowCategory = () => {
        useClues(setShowCategory)
    }

    return ( 
        <div className='stram-category'>
        {!showCategory && (<>
        <button className="stram-category-button" onClick={HandleShowCategory}>Show Category</button>
        </>)}
        {showCategory && <p>{category}</p>}
        </div>
        );
}
 
export default Filter;