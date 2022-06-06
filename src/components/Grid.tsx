import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Grid.scss";

const noOfRows = 20;
const noOfColumns = 20;
const initialGrid = Array.from(Array(noOfRows), (_) =>
    Array(noOfColumns).fill(0)
);
for (let i = 0; i < initialGrid.length; i++) {
    for (let j = 0; j < initialGrid[i].length; j++) {
        initialGrid[i][j] = (i + j) % 33;
    }
}

function Grid() {
    const [grid, setGrid] = useState(initialGrid);
    useEffect(() => {
        setInterval(() => {
            setGrid((prevGrid) => {
                let tempGrid = JSON.parse(JSON.stringify(prevGrid));
                for (let i = 0; i < prevGrid.length; i++) {
                    for (let j = 0; j < prevGrid[i].length; j++) {
                        tempGrid[i][j] = (tempGrid[i][j] + 1) % 33;
                    }
                }
                return tempGrid;
            });
            console.log("hello");
        }, 100);
    }, []);
    // useEffect(() => {
    //
    // }, [grid]);
    return (
        <div className="grid-container">
            <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${noOfColumns}, 1fr)` }}
            >
                {grid.map((row: any[], i: number) => (
                    <>
                        {row.map((cellValue: number, j: number) => (
                            <Cell cellValue={cellValue} />
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Grid;
