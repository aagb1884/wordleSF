const Filter = ({filterByCategory, setFilterByCategory, setNumberOfGuesses, hideFilter}) => {
    return ( 
        <div className="media-filter">
            {!hideFilter && (<>
             <select
                    value={filterByCategory}
                    onChange={(e) => {
                    setFilterByCategory(e.target.value);
                    setNumberOfGuesses((prev) => prev - 1);
                    }}
                className="custom-select"
                aria-label="Filter Words by Category">`
                <option value='All'>Choose a Category</option>
                <option value='Club'>Clubs</option>
                <option value='Ground/Stadium'>Grounds</option>
                <option value='Player'>Players</option>
                </select>
                <span className="focus"></span>
                </> )}
        </div>
     );
}
 
export default Filter;