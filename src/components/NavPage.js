import React,{useState} from "react";
import Pagination from "react-js-pagination";

const NavPage = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);

  };

  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind(this)}
      />
    </div>
  );
};

export default NavPage;
