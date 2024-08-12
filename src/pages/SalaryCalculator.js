import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { convertToString } from "../utils/utils";
import { PieChart } from 'react-minimal-pie-chart';
import BasicTable from "../components/BasicTable/BasicTable";
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const SalaryCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();

    const [costToCompany, setCostToCompany] = useState(600000)
    const [bonusIncluded, setBonusIncluded] = useState(15)

    const [monthlyProfessionalTax, setMonthlyProfessionalTax] = useState(200)
    const [monthlyEmployerPF, setMonthlyEmployerPF] = useState(1800)
    const [monthlyEmployeePF, setMonthlyEmployeePF] = useState(1800)
    const [monthlyAdditionalDeduction, setMonthlyAdditionalDeduction] = useState(0)

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function countGrossSalary() {
        return costToCompany - [(costToCompany * bonusIncluded) / 100];
    }

    function countMonthlyDeduction() {
        return countAnnualDeduction() / 12;
    }

    function countAnnualDeduction() {
        const yrMPT = monthlyProfessionalTax * 12;
        const yrEMPRPF = monthlyEmployerPF * 12;
        const yrEMPEPF = monthlyEmployeePF * 12;
        const yrADDUN = monthlyAdditionalDeduction * 12;
        console.log("V: " + yrADDUN);

        return Number(yrMPT) + Number(yrEMPRPF) + Number(yrEMPEPF) + Number(yrADDUN);
    }

    function countHomeMonthlySalary() {
        return countHomeAnnualSalary() / 12;
    }

    function countHomeAnnualSalary() {
        // Take Home Salary = Gross Pay – Total Deductions
        return countGrossSalary() - countAnnualDeduction();
    }

    function createTitles(title1, title2, title3) {
        return { title1, title2, title3 };
    }

    function createData(name, valueMonthly, valueYearly) {
        return { name, valueMonthly, valueYearly };
    }

    const getTableDatas = [
        createData('Performance Bonus', "-", "₹ " + (costToCompany - countGrossSalary())),
        createData('Total Gross Pay', "₹ " + countGrossSalary() / 12, "₹ " + countGrossSalary()),
    ];

    const getTableTitle = [
        createTitles('Particulars', 'Monthly', 'Yearly'),
    ];

    return (
        <div>
            <SEO title={"Salary Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"Salary Calculator"} />
            <Title title={"Salary Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">

                                {/* Cost to Company (CTC) */}
                                <div className="w-100 d-flex flex-column">
                                    <div className="option justify-content-between flex-row">
                                        <div>Cost to Company (CTC)</div>
                                        <div className={costToCompany < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={costToCompany}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10000000) {
                                                        value = 10000000;
                                                    }

                                                    setCostToCompany(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bonus Included in CTC */}
                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div>Bonus Included in CTC</div>
                                        <div className={bonusIncluded < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{ }</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={bonusIncluded}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 100) {
                                                        value = 100;
                                                    }

                                                    setBonusIncluded(value);
                                                }}
                                            />
                                            <div>%</div>
                                        </div>

                                    </div>

                                    <div className="mt-1">
                                        <SliderComponent
                                            setValue={bonusIncluded}
                                            defaultValue={15}
                                            minValue={0}
                                            stepValue={0.1}
                                            maxValue={100}
                                            onChangeListener={(value) => {
                                                setBonusIncluded(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5 mb-3">
                                    <BasicTable datas={getTableDatas} titles={getTableTitle} />
                                </div>

                                {/* Monthly Professional Tax */}
                                <div className="w-100 d-flex flex-column mt-4">
                                    <div className="option justify-content-between flex-row">
                                        <div>Monthly Professional Tax</div>
                                        <div className={monthlyProfessionalTax < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthlyProfessionalTax}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10000000) {
                                                        value = 10000000;
                                                    }

                                                    setMonthlyProfessionalTax(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Monthly Employer PF */}
                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div>Monthly Employer PF</div>
                                        <div className={monthlyEmployerPF < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthlyEmployerPF}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10000000) {
                                                        value = 10000000;
                                                    }

                                                    setMonthlyEmployerPF(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Monthly Employee PF */}
                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div>Monthly Employee PF</div>
                                        <div className={monthlyEmployeePF < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthlyEmployeePF}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10000000) {
                                                        value = 10000000;
                                                    }

                                                    setMonthlyEmployeePF(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Monthly Additional Deduction (Optional) */}
                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div>Monthly Additional Deduction (Optional)</div>
                                        <div className={monthlyAdditionalDeduction < 0 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={monthlyAdditionalDeduction}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 10000000) {
                                                        value = 10000000;
                                                    }

                                                    setMonthlyAdditionalDeduction(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total Monthly Deductions</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countMonthlyDeduction())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total Annual Deductions</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countAnnualDeduction())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Take Home Monthly Salary</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countHomeMonthlySalary())}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-3">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Take Home Annual Salary</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countHomeAnnualSalary())}</div>
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

export default SalaryCalculator;