
const Search = ({ setSearch }) => {
    return (
        <>
            <div>
                <form className="form-inline my-2 my-lg-0"
                    style={{ width: "100%", height: "125px" }}
                >
                    <input
                        className="form-control mr-sm-2"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        style={{
                            height: "55px",
                            width: "900px",
                            position: "absolute",
                            left: "0",
                            marginLeft: "165px"
                        }}
                        type="search" placeholder="Search" aria-label="Search" />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        style={{
                            height: "55px",
                            width: "90px",
                            position: "absolute",
                            right: "0",
                            marginRight: "190px"
                        }}
                    >Search</button>
                </form>
            </div>
        </>
    )
}

export default Search