import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { performPOW, convertToString } from "../utils/utils";
import { PieChart } from 'react-minimal-pie-chart';
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const LumpsumCalculator = () => {

    const [currencySymbol, setCurrencySymbol] = useState();
    const [monthInvestment, setMonthlyInvestment] = useState(25000)
    const [expectedReturnRate, setExpectedReturnRate] = useState(12)
    const [timePeriod, setTimePeriod] = useState(10)


    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        return monthInvestment;
    }

    function countEstimatedReturn() {
        var returnRate = performPOW((Number(1) + Number(expectedReturnRate / 100)), timePeriod);
        return Math.round((returnRate * monthInvestment) - monthInvestment);
    }

    function countTotalValue() {
        var P = 0;

        P = Number(countInvestedAmount()) + Number(countEstimatedReturn());

        return Math.round(P);
    }

    return (
        <div>
            <SEO title={"Lumpsum Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Lumpsum Calculator"} />
            <Title title={"Lumpsum Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Total investment</div>
                                        <div className={monthInvestment < 500 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthInvestment}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 1000000) {
                                                        value = 1000000;
                                                    }

                                                    setMonthlyInvestment(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={monthInvestment}
                                            defaultValue={25000}
                                            minValue={500}
                                            maxValue={1000000}
                                            onChangeListener={(value) => {
                                                setMonthlyInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Expected return rate (p.a)</div>
                                        <div className={expectedReturnRate < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={expectedReturnRate}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 30) {
                                                        value = 30;
                                                    }

                                                    setExpectedReturnRate(value);
                                                }}
                                            />

                                            <div>%</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={expectedReturnRate}
                                            defaultValue={12}
                                            minValue={1}
                                            maxValue={30}
                                            onChangeListener={(value) => {
                                                setExpectedReturnRate(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Time period</div>
                                        <div className={timePeriod < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input "}
                                                type="number"
                                                placeholder="0"
                                                value={timePeriod}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 40) {
                                                        value = 40;
                                                    }

                                                    setTimePeriod(value);
                                                }}
                                            />
                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={timePeriod}
                                            defaultValue={10}
                                            minValue={1}
                                            maxValue={40}
                                            onChangeListener={(value) => {
                                                setTimePeriod(value);
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
                                            <div className="contentValue">{convertToString(countEstimatedReturn())}</div>
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
                                        Invested Amount
                                    </div>

                                    <div className="contentSecondary font-12 d-flex flex-row align-items-center">
                                        <span className="chartChip" style={{ background: "var(--themecolor)" }}></span>
                                        Est. returns
                                    </div>
                                </div>

                                <PieChart
                                    className="mt-3"
                                    data={[
                                        { title: 'Invested Amount', value: countInvestedAmount(), color: 'var(--primaryBtnLight)' },
                                        { title: 'Est. returns', value: countEstimatedReturn(), color: 'var(--primarybtn)' },
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

export default LumpsumCalculator;