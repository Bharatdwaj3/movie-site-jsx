import ReactPaginate from "react-paginate";

function Pagination({totalPages, pageNumber, setPageNumber}) {
  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center gap-4 mb-4"
        previousLabel="Prev"
        previousClassName="btn btn-primary"
        nextLabel="Next"
        nextClassName="btn btn-primary"
        pageCount={totalPages?totalPages:totalPages} 
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(page)=>{setPageNumber(page.selected+1);}}
      />
    </>
  );
}

export default Pagination
