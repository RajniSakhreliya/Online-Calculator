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
    const [monthlySalary, setMonthlySalary] = useState(50000)
    const [yourAge, setYourAge] = useState(30)
    const [contributionEPF, setContributionEPF] = useState(12)
    const [annualIncrease, setAnnualIncrease] = useState(5)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countInvestedAmount() {
        return monthlySalary * yourAge;
    }

    function countTotalInterest() {
        return countMaturityValue() - countInvestedAmount();
    }

    function countMaturityValue() {
        // P[({ (1 + t) ^ n } - 1 ) / i ]x(1 + i)

        var P = monthlySalary;
        const r = 7.1 / 100;
        const n = yourAge;

        const pow = Math.pow(Number(1) + Number(r), n).toFixed(6);
        const Right = ((pow - 1) / r);
        const A = P * (Right * (1 + r));

        return Math.round(A);
    }

    return (
        <div>
            <SEO title={"Employee Provident Fund(EPF) Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Employee Provident Fund(EPF) Calculator"} />
            <Title title={"Employee Provident Fund(EPF) Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Monthly basic salary</div>
                                        <div className={monthlySalary < 1000 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthlySalary}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 500000) {
                                                        value = 500000;
                                                    }

                                                    setMonthlySalary(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={monthlySalary}
                                            defaultValue={50000}
                                            minValue={1000}
                                            maxValue={500000}
                                            onChangeListener={(value) => {
                                                setMonthlySalary(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Your age</div>
                                        <div className={yourAge < 15 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={yourAge}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 58) {
                                                        value = 58;
                                                    }

                                                    setYourAge(value);
                                                }}
                                            />

                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={yourAge}
                                            defaultValue={30}
                                            minValue={15}
                                            maxValue={58}
                                            onChangeListener={(value) => {
                                                setYourAge(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Your contribution to EPF</div>
                                        <div className={contributionEPF < 12 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={contributionEPF}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 20) {
                                                        value = 20;
                                                    }

                                                    setContributionEPF(value);
                                                }}
                                            />

                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={contributionEPF}
                                            defaultValue={12}
                                            minValue={12}
                                            maxValue={20}
                                            onChangeListener={(value) => {
                                                setContributionEPF(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Annual increase rate in salary</div>
                                        <div className={annualIncrease < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={annualIncrease}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 15) {
                                                        value = 15;
                                                    }

                                                    setAnnualIncrease(value);
                                                }}
                                            />

                                            <div>Yr</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={annualIncrease}
                                            defaultValue={5}
                                            minValue={0}
                                            maxValue={15}
                                            onChangeListener={(value) => {
                                                setAnnualIncrease(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Rate of interest</div>
                                        <div className={"variant"}>
                                            <div className="symbol" id="currency-symbol"></div>
                                            <div id="one-variant" className={"variant-count bg-transparent borderless-input "}>8.1%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Maturity amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countInvestedAmount())}</div>
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

export default PublicProvidedFundCalculator;