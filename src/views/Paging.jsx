export default function Paging(props) {
    const getPages = () => {
        const result = [];
        for (let i = 0; i < props.totalPages; i++) {
            let page = i + 1;
            result.push(
                <a onClick={() => {
                    props.onChange(page)
                }}
                className={props.actualPage === page ? 'active' : ''}>
                    {page}
                </a>
            );
        }
        return result;
    }
    return (
        <div className="topbar-filter">
            {/* <label>Movies per page:</label>
            <select>
                <option value="range">5 Movies</option>
                <option value="saab">10 Movies</option>
            </select> */}
            <div className="pagination2">
                <span>Page {props.actualPage} of {props.totalPages}:</span>
                {getPages()};
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
}