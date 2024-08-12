import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { convertToString } from "../utils/utils";
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const SWPCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();
    const [totalInvestment, setTotalInvestment] = useState(500000)
    const [withdrawalPM, setWithdrawalPM] = useState(10000)
    const [expectedReturnRate, setExpectedReturnRate] = useState(8)
    const [timePeriod, setTimePeriod] = useState(5)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        return totalInvestment;
    }

    function countTotalWithdrawalAmount() {
        return withdrawalPM * (timePeriod * 12);
    }

    function countTotalValue() {
        const P = totalInvestment;
        const W = withdrawalPM;
        const n = timePeriod;
        const annualRate = expectedReturnRate / 100;

        const r = (Math.pow(Number(1) + Number(annualRate), 1 / 12) - 1).toFixed(6);
        const compounded = Math.pow(Number(1) + Number(r), n * 12);

        const Left = P * compounded;
        const Right = (W * (compounded - 1) / r);
        const A = Left - Right;
        return Math.round(A);
    }

    return (
        <div>
            <SEO title={"SWP (Systematic Withdrawal Plan) Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"SWP (Systematic Withdrawal Plan) Calculator"} />
            <Title title={"SWP (Systematic Withdrawal Plan) Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Total investment</div>
                                        <div className={totalInvestment < 10000 ? "error-msg-bg" : "variant"}>
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

                                                    if (value > 5000000) {
                                                        value = 5000000;
                                                    }

                                                    setTotalInvestment(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalInvestment}
                                            defaultValue={1000000}
                                            minValue={10000}
                                            maxValue={5000000}
                                            onChangeListener={(value) => {
                                                setTotalInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                {/* Withdrawal Per Month */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Withdrawal per month</div>
                                        <div className={withdrawalPM < 500 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={withdrawalPM}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 30) {
                                                        value = 30;
                                                    }

                                                    setWithdrawalPM(value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={withdrawalPM}
                                            defaultValue={10000}
                                            minValue={500}
                                            maxValue={50000}
                                            onChangeListener={(value) => {
                                                setWithdrawalPM(value);
                                            }} />
                                    </div>
                                </div>

                                {/* ExpectedReturn Rate */}
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
                                            defaultValue={8}
                                            minValue={1}
                                            maxValue={30}
                                            onChangeListener={(value) => {
                                                setExpectedReturnRate(value);
                                            }} />
                                    </div>
                                </div>

                                {/* TimePeriod */}
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

                                                    if (value > 30) {
                                                        value = 30;
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
                                            defaultValue={5}
                                            minValue={1}
                                            maxValue={30}
                                            onChangeListener={(value) => {
                                                setTimePeriod(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total investment</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countInvestedAmount())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total withdrawal</div>
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

export default SWPCalculator;