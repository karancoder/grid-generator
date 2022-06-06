import React, { FC } from "react";
import "./Cell.scss";

const Cell: FC<{ cellValue: number }> = ({ cellValue }) => {
    return (
        <div
            className="cell"
            style={{ backgroundColor: `hsl(0, 0%, ${100 - 3 * cellValue}%)` }}
        ></div>
    );
};

export default Cell;
