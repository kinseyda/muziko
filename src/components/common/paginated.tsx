import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Paginated(props: {
  contents: JSX.Element[];
  pageSize: number;
}) {
  const pageButtons = 5;
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-3 place-items-center h-full overflow-auto p-8">
        {props.contents
          .slice(pageIndex * props.pageSize, (pageIndex + 1) * props.pageSize)
          .map((x) => {
            return <Fragment key={x.key}>{x}</Fragment>;
          })}
        <div className="m-5">
          <ReactPaginate
            containerClassName="join"
            pageLinkClassName="join-item btn"
            previousLinkClassName="join-item btn"
            nextLinkClassName="join-item btn"
            breakLinkClassName="join-item btn btn-disabled"
            activeLinkClassName="btn-active"
            breakLabel="..."
            onPageChange={(event) => setPageIndex(event.selected)}
            pageRangeDisplayed={pageButtons}
            pageCount={Math.ceil(props.contents.length / props.pageSize)}
            marginPagesDisplayed={1}
            nextLabel={<ChevronRightIcon className="w-4" />}
            previousLabel={<ChevronLeftIcon className="w-4" />}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}
