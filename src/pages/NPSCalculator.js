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

const NPSCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();

    const [totalInvestment, setTotalInvestment] = useState(10000)
    const [rateOfInterest, setRateOfInterest] = useState(9)
    const [totalYears, setTotalYears] = useState(20)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        const value = totalInvestment * ((60 - totalYears) * 12)
        return value.toFixed(0);
    }

    function countAnnuityAmount() {
        const value = (countTotalValue() / 100) * 60;
        return Math.round(value).toFixed(0);
    }

    function countLumpsumAmount() {
        const value = (countTotalValue() / 100) * 40;
        return Math.round(value).toFixed(0);
    }

    function countTotalValue() {
        // Maturity value (MV) = P X [(((1+RM)^N) - 1) / RM] X (1 + RM)
        // https://www.icicidirect.com/nps-calculator

        let MV = 0;
        const P = totalInvestment;
        const RM = ((rateOfInterest / 100) / 12).toFixed(6);
        const N = (60 - totalYears) * 12;

        const pow = Math.pow(Number(1) + Number(RM), N).toFixed(6);
        const center = (pow - 1) / RM;
        const Right = Number(1) + Number(RM);

        MV = P * (center * Right);

        return Math.round(MV).toFixed(0);
    }

    return (
        <div>
            <SEO title={"National Pension Scheme(NPS) Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"National Pension Scheme(NPS) Calculator"} />
            <Title title={"National Pension Scheme(NPS) Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Investment per month</div>
                                        <div className={totalInvestment < 500 ? "error-msg-bg" : "variant"}>
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
                                            minValue={500}
                                            maxValue={150000}
                                            onChangeListener={(value) => {
                                                setTotalInvestment(value);
                                            }} />
                                    </div>
                                </div>

                                {/* expected return */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Expected return (p.a)</div>
                                        <div className={rateOfInterest < 8 ? "error-msg-bg" : "variant"}>
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
                                            defaultValue={9}
                                            minValue={8}
                                            stepValue={0.1}
                                            maxValue={15}
                                            onChangeListener={(value) => {
                                                setRateOfInterest(value);
                                            }} />
                                    </div>
                                </div>

                                {/* Age */}
                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Your age</div>
                                        <div className={totalYears < 18 ? "error-msg-bg" : "variant"}>
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

                                                    if (value > 60) {
                                                        value = 60;
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
                                            defaultValue={20}
                                            minValue={18}
                                            maxValue={60}
                                            onChangeListener={(value) => {
                                                setTotalYears(value);
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
                                        <div className="contentSecondary">Annuity Amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countAnnuityAmount())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Lumpsum Amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countLumpsumAmount())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Min. annuity investment</div>
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

export default NPSCalculator;