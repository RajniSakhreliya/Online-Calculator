import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { performPOW, convertToString, getAnimatedNumberView } from "../utils/utils";
import { PieChart } from 'react-minimal-pie-chart';
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const SukanyaYojanaCalculator = () => {

    const [currencySymbol, setCurrencySymbol] = useState();
    const [totalInvestment, setTotalInvestment] = useState(10000)
    const [girlsAge, setGirlsAge] = useState(5)
    const [startYear, setStartYear] = useState(2024)

    useEffect(() => {
        console.log("Start");
        setCurrencySymbol(getCurrencySymbol());
    }, []);


    function countInvestedAmount() {
        return (totalInvestment * 15);
    }

    function countTotalInterest() {
        return countTotalValue() - countInvestedAmount();
    }

    function countMaturityYear() {
        return Number(startYear) + Number(21);
    }

    function countTotalValue() {
        let openingBalance = 0;
        const investmentYears = 21;
        const interestRate = 8.2 / 100;

        for (let k = 0; k < investmentYears; k++) {
            if (k < 14) {
                openingBalance = (Number(openingBalance) + Number(totalInvestment)).toFixed(2);
            }

            const interest = ((openingBalance * interestRate)).toFixed(8);

            openingBalance = (Number(openingBalance) + Number(interest)).toFixed(4);
        }
        console.log(openingBalance + "");
        return Math.round(openingBalance);

        // const p = totalInvestment;
        // const powL = Number(1) + Number(interestRate);
        // const pow = Math.pow(powL, 15);
        // const f15 = p * ((pow - 1) / interestRate);
        // console.log("F: " + f15);

        // const final = f15 * (Math.pow((Number(1) + interestRate), 6));
        // console.log("final : " + final);
    }

    return (
        <div>
            <SEO title={"Sukanya Samriddhi Yojana Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Sukanya Samriddhi Yojana Calculator"} />
            <Title title={"Sukanya Samriddhi Yojana Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">

                                <div className="w-100 d-flex flex-column mb-5 color-gray">
                                    Latest SSY Rate = 8.2%
                                </div>

                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Yearly investment</div>
                                        <div className={totalInvestment < 250 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={totalInvestment}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 150000) {
                                                        value = 150000;
                                                    }

                                                    setTotalInvestment(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalInvestment}
                                            defaultValue={10000}
                                            minValue={250}
                                            maxValue={150000}
                                            onChangeListener={(value) => {
                                                setTotalInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Girl's age</div>
                                        <div className={girlsAge < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={girlsAge}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10) {
                                                        value = 10;
                                                    }

                                                    setGirlsAge(value);
                                                }}
                                            />

                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={girlsAge}
                                            defaultValue={5}
                                            minValue={1}
                                            maxValue={10}
                                            onChangeListener={(value) => {
                                                setGirlsAge(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Start Year</div>
                                        <div className={startYear < 2015 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input "}
                                                type="number"
                                                placeholder="0"
                                                value={startYear}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 2030) {
                                                        value = 2030;
                                                    }

                                                    setStartYear(value);
                                                }}
                                            />
                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={startYear}
                                            defaultValue={2024}
                                            minValue={2015}
                                            maxValue={2030}
                                            onChangeListener={(value) => {
                                                setStartYear(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total investment</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">
                                                {convertToString(countInvestedAmount())}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total interest</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">
                                                {convertToString(countTotalInterest())}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Maturity year</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol"></div>
                                            <div className="contentValue">
                                                {(countMaturityYear())}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Maturity value</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">
                                                {convertToString(countTotalValue())}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pie-chart-div d-flex flex-column absolute-center mb-1 ms-3">
                                <div className="pie-chart-title d-flex flex-row justify-content-between">
                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--primaryBtnLight)" }}></span>
                                        Principal interest
                                    </div>

                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--themecolor)" }}></span>
                                        Total interest
                                    </div>
                                </div>

                                <PieChart
                                    className="mt-3"
                                    data={[
                                        { title: 'Principal interest', value: countInvestedAmount(), color: 'var(--primaryBtnLight)' },
                                        { title: 'Total interest', value: countTotalInterest(), color: 'var(--primarybtn)' },
                                    ]}
                                    lineWidth={30}
                                    startAngle={-90}
                                    totalValue={countTotalValue()}

                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="rightExtra mb-3 backgroundPrimary ">
                    <CInvestNow />

                    <CPopularCalculator currentPage={0} />
                </div>
            </div>
        </div>
    )
};

export default SukanyaYojanaCalculator;