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

const PublicProvidedFundCalculator = () => {

    const [currencySymbol, setCurrencySymbol] = useState();
    const [totalInvestment, setTotalInvestment] = useState(10000)
    const [maturityYears, setMaturityYears] = useState(15)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        return totalInvestment * maturityYears;
    }

    function countTotalInterest() {
        return countMaturityValue() - countInvestedAmount();
    }

    function countMaturityValue() {
        // P[({ (1 + t) ^ n } - 1 ) / i ]x(1 + i)

        var P = totalInvestment;
        const r = 7.1 / 100;
        const n = maturityYears;

        const pow = Math.pow(Number(1) + Number(r), n).toFixed(6);
        const Right = ((pow - 1) / r);
        const A = P * (Right * (1 + r));

        return Math.round(A);
    }

    return (
        <div>
            <SEO title={"Public Provided Fund(PPF) Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Public Provided Fund(PPF) Calculator"} />
            <Title title={"Public Provided Fund(PPF) Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Yearly investment</div>
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

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Time period (in years)</div>
                                        <div className={maturityYears < 15 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={maturityYears}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 50) {
                                                        value = 50;
                                                    }

                                                    setMaturityYears(value);
                                                }}
                                            />

                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={maturityYears}
                                            defaultValue={15}
                                            minValue={15}
                                            maxValue={50}
                                            onChangeListener={(value) => {
                                                setMaturityYears(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Rate of interest</div>
                                        <div className={"variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <div id="one-variant" className={"variant-count bg-transparent borderless-input "}>7.1%</div>
                                        </div>
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
                                        <div className="contentSecondary">Total interest</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalInterest())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Maturity value</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countMaturityValue())}</div>
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
                                        Total interest
                                    </div>
                                </div>

                                <PieChart
                                    className="mt-3"
                                    data={[
                                        { title: 'Total investment', value: countInvestedAmount(), color: 'var(--primaryBtnLight)' },
                                        { title: 'Total interest', value: countTotalInterest(), color: 'var(--primarybtn)' },
                                    ]}
                                    lineWidth={30}
                                    startAngle={-90}
                                    totalValue={countMaturityValue()}

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

export default PublicProvidedFundCalculator;