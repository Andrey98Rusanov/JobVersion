import { Pagination } from "antd";
import React from "react";
import "./AntdComponents.css"

function PaginationFilms({ loading, filmData, totalPages, onPageChange }) {
    return (
        <div className="Pagination">
        {loading || filmData === null || filmData.length === 0 ? null : <Pagination
          defaultCurrent={1}
          total={totalPages ? totalPages * 10 : 50}
          onChange={onPageChange}
          showSizeChanger={false}
        />}
        </div>
    )
  }

  export default PaginationFilms