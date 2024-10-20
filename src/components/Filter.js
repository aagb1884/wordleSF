const Filter = ({showCategory, setShowCategory, useClues, category}) => {

    const HandleShowCategory = () => {
        useClues(setShowCategory)
    }

    return ( 
        <div className='category'>
        {!showCategory && (<>
        <button className="category-button" onClick={HandleShowCategory}>Show Category</button>
        </>)}
        {showCategory && <p>{category}</p>}
        </div>
        );
}
 
export default Filter;