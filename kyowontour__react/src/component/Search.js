const Search = () => {
    return (
        <div className="search_field">
        <form action="#!">
        <p>어디로 떠나세요?</p>
        <div className="inp-search">
        <input type="text" placeholder="검색어를 입력하세요" />
        <button className="inputBtn">
        <i className="xi-search"></i>
        </button>
        </div>
        <div className="search_tag">
        <ul className="tag_items">
            <li className="tag__item">
                <a href="/">#해외여행</a>
            </li>
            <li className="tag__item">
                <a href="/">#국내여행</a>
            </li>
            <li className="tag__item">
                <a href="/">#허니문</a>
            </li>
            <li className="tag__item">
                <a href="/">#골프</a>
            </li>
            <li className="tag__item">
                <a href="/">#부산/대구 출발</a>
            </li>
            <li className="tag__item">
                <a href="/">#MZ PICK</a>
            </li>
        </ul>
        </div>
        </form>
    </div>
    )
}
export default Search;