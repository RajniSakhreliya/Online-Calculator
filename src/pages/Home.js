import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { FaArrowLeft } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import sip from "../assets/images/sip.webp";
import { getCalculatorList } from "../utils/data";
import Loader from "../components/Loader/Loader";
import Title from "../components/Title/Title";

const Home = () => {
    const [calList, setCalculatorList] = useState();

    useEffect(() => {
        console.log("Simple use effect call");
        setTimeout(() => {
            setCalculatorList(getCalculatorList)
        }, 100);
    }, []);

    useEffect(() => {
        console.log("2nd use effect ");
    }, [calList]);


    return (
        <React.Fragment>
            <SEO title={"Home"} />
            <Breadcrumb title={"Home"} content={"Home"} contentTwo={"Calculator"} />
            <Title title={"Calculators"} />

            <div className="home-page">
                {calList ?
                    <div className="cal-list justify-content-between">
                        {
                            calList.map(data =>
                                <a className="cal-container text-decoration-none" href={"/calculators/" + data.page + ""}>
                                    <div className="lazyload-wrapper ">
                                        <img className="BackgroundImage"
                                            src={sip}
                                            width="80"
                                            height="80"
                                            alt={data.name}
                                            loading="lazy" />
                                    </div>

                                    <p className="Heading headingLarge">{data.name}</p>
                                    <p className="Description bodyBase">{data.description}</p>
                                </a>
                            )

                        }
                    </div>
                    :
                    <>
                        <Loader title="Please Wait..." />
                    </>
                }
            </div>
        </React.Fragment>
    );
}

export default Home;