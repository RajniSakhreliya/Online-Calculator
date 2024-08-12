import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { convertToString } from "../utils/utils";
import { PieChart } from 'react-minimal-pie-chart';
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const SimpleInterestCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();

    const [totalInvestment, setTotalInvestment] = useState(100000)
    const [rateOfInterest, setRateOfInterest] = useState(6)
    const [totalYears, setTotalYears] = useState(5)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countTotalInvestment() {
        return totalInvestment;
    }

    function countTotalInterest() {
        return countTotalAmount() - countTotalInvestment();
    }

    function countTotalAmount() {
        let MV = 0;
        const P = totalInvestment;
        const R = (rateOfInterest / 100);
        const t = totalYears;

        const right = Number(1) + Number(R * t);
        MV = P * right;

        return Math.round(MV).toFixed(0);
    }

    return (
        <div>
            <SEO title={"Simple Interest Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Simple Interest Calculator"} />
            <Title title={"Simple Interest Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Principal Amount</div>
                                        <div className={totalInvestment < 1000 ? "error-msg-bg" : "variant"}>
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

                                                    if (value > 100000000) {
                                                        value = 100000000;
                                                    }

                                                    setTotalInvestment(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalInvestment}
                                            defaultValue={100000}
                                            minValue={1000}
                                            maxValue={100000000}
                                            onChangeListener={(value) => {
                                                setTotalInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                {/* Rate of interest */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Rate of interest (p.a)</div>
                                        <div className={rateOfInterest < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{ }</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={rateOfInterest}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 50) {
                                                        value = 50;
                                                    }

                                                    setRateOfInterest(value);
                                                }}
                                            />
                                            <div>%</div>
                                        </div>

                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={rateOfInterest}
                                            defaultValue={6}
                                            minValue={1}
                                            stepValue={0.1}
                                            maxValue={50}
                                            onChangeListener={(value) => {
                                                setRateOfInterest(value);
                                            }} />
                                    </div>
                                </div>

                                {/* Age */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Time period</div>
                                        <div className={totalYears < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={totalYears}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 30) {
                                                        value = 30;
                                                    }

                                                    setTotalYears(value);
                                                }}
                                            />
                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalYears}
                                            defaultValue={5}
                                            minValue={1}
                                            maxValue={30}
                                            onChangeListener={(value) => {
                                                setTotalYears(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Principal amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalInvestment())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total interest</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalInterest())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalAmount())}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pie-chart-div d-flex flex-column absolute-center mb-1 ms-3">
                                <div className="pie-chart-title d-flex flex-row justify-content-between">
                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--primaryBtnLight)" }}></span>
                                        Principal amount
                                    </div>

                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--themecolor)" }}></span>
                                        Total interest
                                    </div>
                                </div>

                                <PieChart
                                    className="mt-3"
                                    data={[
                                        { title: 'Principal amount', value: countTotalInvestment(), color: 'var(--primaryBtnLight)' },
                                        { title: 'Total interest', value: countTotalInterest(), color: 'var(--primarybtn)' },
                                    ]}
                                    lineWidth={30}
                                    startAngle={-90}
                                    totalValue={countTotalAmount()}

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

export default SimpleInterestCalculator;