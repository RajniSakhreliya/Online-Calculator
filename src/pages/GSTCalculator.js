import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Title from "../components/Title/Title";
import { getCurrencySymbol } from "../utils/index";
import SliderComponent from "../components/Slider/Slider";
import { convertToString } from "../utils/utils";
import PopupView from "../components/PopupView/PopupView";
import CInvestNow from "./CInvestNow";
import CPopularCalculator from "./CPopularCalculator";

const GSTCalculator = () => {
    const [currencySymbol, setCurrencySymbol] = useState();

    const [totalAmount, setTotalAmount] = useState(25000)
    const [taxSlab, setTaxSlab] = useState(12)

    const [selectedValue, setSelectedValue] = useState(0);

    useEffect(() => {
        setCurrencySymbol(getCurrencySymbol());
    }, []);

    function handleRadioChange(target) {
        setSelectedValue(target);
    }

    function countTotalGST() {
        if (selectedValue == 0) {
            const MV = ((totalAmount * taxSlab) / 100);
            return (MV).toFixed(2);

        } else {
            const MV = totalAmount - [totalAmount * [100 / (100 + taxSlab)]];
            return (MV).toFixed(2);
        }
    }

    function countPostGstAmount() {
        let MV = 0;

        if (selectedValue == 0) {
            // GST amount = (Price x GST%)
            // Net price = Cost of the product + GST amount
            MV = totalAmount + ((totalAmount * taxSlab) / 100);

        } else {
            // Original cost – [Original cost x {100/(100+GST%)}]
            MV = totalAmount - (totalAmount - [totalAmount * [100 / (100 + taxSlab)]]);
        }

        return (MV).toFixed(2);
    }

    return (
        <div>
            <SEO title={"GST Calculator"} />
            <Breadcrumb title={"Home"} content={"calculators"} contentTwo={"GST Calculator"} />
            <Title title={"GST Calculator"} />

            <div className="calculator-page">
                <div className="parent-top mb-3">
                    <div className="parent mb-3">
                        <div className="container-main-fragment mt-3 mb-3">
                            <div className="d-flex flex-column col ms-2 me-2">
                                <div className="w-100 d-flex flex-column">

                                    <div className="d-flex mb-5">
                                        <div onClick={() => handleRadioChange(0)}>
                                            <input
                                                type="radio"
                                                id="GSTExclusive"
                                                value="GSTExclusive"
                                                checked={selectedValue === 0}
                                                onChange={() => { }}
                                            />
                                            <label className="ms-2">GST Exclusive</label>
                                        </div>
                                        <PopupView popupContent={"GST Exclusive: Amount entered does not contain GST"} />

                                        <div className="ms-4" onClick={() => handleRadioChange(1)}>
                                            <input
                                                type="radio"
                                                id="GSTInclusive"
                                                value="GSTInclusive"
                                                checked={selectedValue === 1}
                                                onChange={() => { }}
                                            />
                                            <label className="ms-2">GST Inclusive</label>
                                        </div>
                                        <PopupView popupContent={"GST Inclusive: Amount entered contains GST"} />

                                    </div>

                                    <div className="option justify-content-between flex-row">
                                        <div>Total amount</div>
                                        <div className={totalAmount < 5000 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={totalAmount}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 500000) {
                                                        value = 500000;
                                                    }

                                                    setTotalAmount(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={totalAmount}
                                            defaultValue={25000}
                                            minValue={5000}
                                            maxValue={500000}
                                            onChangeListener={(value) => {
                                                setTotalAmount(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div>Tax slab</div>
                                        <div className={taxSlab < 1 ? "error-msg-bg" : "variant"}>
                                            <div className="symbol" id="currency-symbol">{ }</div>
                                            <input id="one-variant" className={"variant-count bg-transparent borderless-input"}
                                                type="number"
                                                placeholder="0"
                                                value={taxSlab}
                                                onWheel={() => document.activeElement.blur()}
                                                onChange={(e) => {
                                                    var value = e.target.value;

                                                    if (value < 0) {
                                                        value = 0;
                                                    }

                                                    if (value > 30) {
                                                        value = 30;
                                                    }

                                                    setTaxSlab(value);
                                                }}
                                            />
                                            <div>%</div>
                                        </div>

                                    </div>

                                    <div className="mt-3">
                                        <SliderComponent
                                            setValue={taxSlab}
                                            defaultValue={12}
                                            minValue={1}
                                            maxValue={30}
                                            onChangeListener={(value) => {
                                                setTaxSlab(value);
                                            }} />
                                    </div>
                                </div>

                                <div className="w-100 d-flex flex-column mt-5">
                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Total GST</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countTotalGST())}</div>
                                        </div>
                                    </div>

                                    <div className="option justify-content-between flex-row">
                                        <div className="contentSecondary">Post-GST amount</div>
                                        <div className="d-flex flex-row">
                                            <div className="symbol" id="currency-symbol">{currencySymbol}</div>
                                            <div className="contentValue">{convertToString(countPostGstAmount())}</div>
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

export default GSTCalculator;