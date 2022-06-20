import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Pagination = ({
  displayPerpage,
  onPaginationChange,
  totalnoOfRecord,
}) => {
  const [pageIndex, setpageIndex] = useState(1);
  const [noofPage, setnoofPage] = useState(
    Math.ceil(totalnoOfRecord / displayPerpage)
  );
  console.log(noofPage);
  useEffect(() => {
    const value = displayPerpage * pageIndex;
    onPaginationChange(value - displayPerpage, value);
  }, [pageIndex]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (pageIndex === 1) {
        setpageIndex(1);
      } else {
        setpageIndex(pageIndex - 1);
      }
    } else if (type == "next") {
      if (Math.ceil(totalnoOfRecord / displayPerpage) === pageIndex) {
        setpageIndex(pageIndex);
      } else {
        setpageIndex(pageIndex + 1);
      }
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example ">
        <ul className="pagination">
        <li className="page-item">
            <NavLink
              className="page-link"
              to="#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </NavLink>
          </li>
         
       
          <li className="page-item">
            <NavLink
              className="page-link"
              to="#"
              onClick={() => onButtonClick("next")}
            >
              Next
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
