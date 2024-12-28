import React, { useState } from "react";
import style from "./style.module.css";

type PaginationProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean;
        right: boolean;
    };
    nav?: {
        current: number;
        total: number;
    };
};

const Pagination = (props: PaginationProps) => {
const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

const handleNextPageClick = () => {
    onNextPageClick();
};

const handlePrevPageClick = () => {
    onPrevPageClick();
};

    return (
        <div className={style.pagination}>
            <button className={style.arrow}
            type="button" onClick={handlePrevPageClick}
            disabled={disable.left}>
               {'<'}
            </button>
            {nav && (
                <span className={style.navigation}>{nav.current} / {nav.total}</span>
            )}
            <button className={style.arrow}
            type="button"
            onClick={handleNextPageClick}
            disabled={disable.right}>
                {'>'}
            </button>
        </div>
   );
}

export default React.memo(Pagination);