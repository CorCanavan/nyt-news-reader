import './Dropdown.css';

const Dropdown = ({ sectionKeyword, handleSectionSelection }) => {

  // arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world

  return (
    <div className="form-wrapper">
      <p className="dropdown-label">Choose a section category to see current, related NYT articles!</p>
      <form>
        <select name="selectSection" id="selectSection" onChange={(e) => handleSectionSelection(e.target.value)} value={sectionKeyword}>
          <option value="default" disabled>Select a Section Category</option>
          <option value="arts">Arts</option>
          <option value="automobiles">Automobiles</option>
          <option value="books">Books</option>
          <option value="business">Business</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="home">Home</option>
          <option value="insider">Insider</option>
          <option value="magazine">Magazine</option>
          <option value="movies">Movies</option>
          <option value="nyregion">NY Region</option>
          <option value="obituaries">Obituaries</option>
          <option value="opinion">Opinion</option>
          <option value="politics">Politics</option>
          <option value="realestate">Real Estate</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="sundayreview">Sunday Review</option>
          <option value="technology">Technology</option>
          <option value="theater">Theater</option>
          <option value="t-magazine">T-Magazine</option>
          <option value="travel">Travel</option>
          <option value="upshot">Upshot</option>
          <option value="us">US</option>
          <option value="world">World</option>
        </select>
      </form>
    </div>
  )
}

export default Dropdown;