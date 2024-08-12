import React, { useEffect, useState } from "react";
import { getCalculatorList } from "../utils/data";

const CPopularCalculator = ({ currentPage }) => {
    const [calList, setCalculatorList] = useState();

    useEffect(() => {
        setCalculatorList(getCalculatorList);
    }, []);

    return (
        <div>
            {
                calList ?
                    <div className="otherCalculator">
                        <div className="Title">Popular Calculators</div>
                        {
                            calList.map((data, i) =>
                                i != currentPage ?
                                    <a className="LinkElement cur-po" href={data.page}>{data.name}</a>
                                    : <></>
                            )
                        }
                    </div>
                    :
                    <></>
            }
        </div >
    );
}

export default CPopularCalculator;