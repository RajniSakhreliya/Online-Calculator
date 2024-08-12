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

const FDCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();

    const [totalInvestment, setTotalInvestment] = useState(100000)
    const [rateOfInterest, setRateOfInterest] = useState(6.5)
    const [totalYears, setTotalYears] = useState(5)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        return totalInvestment;
    }

    function countTotalWithdrawalAmount() {
        return countTotalValue() - countInvestedAmount();
    }

    function countTotalValue() {
        // A = P*((1+r/n)^nt);

        const P = totalInvestment;
        const r = rateOfInterest / 100;
        const n = 4;
        const t = totalYears;

        const A = P * [Math.pow((Number(1) + Number(r / n)), (n * t))];

        return Math.round(A);
    }

    return (
        <div>
            <SEO title={"Fixed Deposit(FD) Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Fixed Deposit(FD) Calculator"} />
            <Title title={"Fixed Deposit(FD) Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Total investment</div>
                                        <div className={totalInvestment < 5000 ? "error-msg-bg" : "variant"}>
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

                                                    if (value > 10000000) {
                                                        value = 10000000;
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
                                            minValue={5000}
                                            maxValue={10000000}
                                            onChangeListener={(value) => {
                                                setTotalInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                {/* rateOfInterest */}
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

                                                    if (value > 15) {
                                                        value = 15;
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
                                            defaultValue={6.5}
                                            minValue={1}
                                            stepValue={0.1}
                                            maxValue={15}
                                            onChangeListener={(value) => {
                                                setRateOfInterest(value);
                                            }} />
                                    </div>
                                </div>

                                {/* Time period */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Time period in years</div>
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

                                                    if (value > 25) {
                                                        value = 25;
                                                    }

                                                    setTotalYears(value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalYears}
                                            defaultValue={5}
                                            minValue={1}
                                            maxValue={25}
                                            onChangeListener={(value) => {
                                                setTotalYears(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Invested amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countInvestedAmount())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Est. returns</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalWithdrawalAmount())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total value</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalValue())}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pie-chart-div d-flex flex-column absolute-center mb-1 ms-3">
                                <div className="pie-chart-title d-flex flex-row justify-content-between">
                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--primaryBtnLight)" }}></span>
                                        Total investment
                                    </div>

                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--themecolor)" }}></span>
                                        Total returns
                                    </div>
                                </div>

                                <PieChart
                                    className="mt-3"
                                    data={[
                                        { title: 'Invested Amount', value: countInvestedAmount(), color: 'var(--primaryBtnLight)' },
                                        { title: 'Est. returns', value: countTotalWithdrawalAmount(), color: 'var(--primarybtn)' },
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

export default FDCalculator;