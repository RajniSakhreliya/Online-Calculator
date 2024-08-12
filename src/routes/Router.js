import React, { lazy } from "react";
import { Route, Routes } from "react-router";

// const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));

const SipCalculator = lazy(() => import("../pages/SipCalculator"));
const LumpsumCalculator = lazy(() => import("../pages/LumpsumCalculator"));
const SWPCalculator = lazy(() => import("../pages/SWPCalculator"));
const MutualFundCalculator = lazy(() => import("../pages/MutualFundCalculator"));
const SukanyaYojanaCaculator = lazy(() => import("../pages/SukanyaYojanaCalculator"));
const PPFCalculator = lazy(() => import("../pages/PublicProvidedFundCalculator"));
const FDCalculator = lazy(() => import("../pages/FDCalculator"));
const RDCalculator = lazy(() => import("../pages/RDCalculator"));
const NPSCalculator = lazy(() => import("../pages/NPSCalculator"));
const EMICalculator = lazy(() => import("../pages/EMICalculator"));
const CarLoanEMICalculator = lazy(() => import("../pages/CarLoanEmiCalculator"));
const HomeLoanEMICalculator = lazy(() => import("../pages/HomeLoanEmiCalculator"));
const SimpleInterestCalculator = lazy(() => import("../pages/SimpleInterestCalculator"));
const CompoundInterestCalculator = lazy(() => import("../pages/CompoundInterestCalculator"));
const GratuityCalculator = lazy(() => import("../pages/GratuityCalculator"));
const GSTCalculator = lazy(() => import("../pages/GSTCalculator"));
const SalaryCalculator = lazy(() => import("../pages/SalaryCalculator"));
const InflationCalculator = lazy(() => import("../pages/InflationCalculator"));

const Router = () => {
  return (
    <Routes basename={process.env.REACT_APP_BASE_URL}>

      <Route path="/" exact={true} element={<Home />} />

      <Route path="/home" exact={true} element={<Home />} />
      <Route path="/calculators/sip-calculator" exact={true} element={<SipCalculator />} />
      <Route path="/calculators/lumpsum-calculator" exact={true} element={<LumpsumCalculator />} />
      <Route path="/calculators/swp-calculator" exact={true} element={<SWPCalculator />} />
      <Route path="/calculators/mutual-fund-returns-calculator" exact={true} element={<MutualFundCalculator />} />
      <Route path="/calculators/sukanya-samriddhi-yojana-calculator" exact={true} element={<SukanyaYojanaCaculator />} />
      <Route path="/calculators/ppf-calculator" exact={true} element={<PPFCalculator />} />
      <Route path="/calculators/fd-calculator" exact={true} element={<FDCalculator />} />
      <Route path="/calculators/rd-calculator" exact={true} element={<RDCalculator />} />
      <Route path="/calculators/nps-calculator" exact={true} element={<NPSCalculator />} />
      <Route path="/calculators/emi-calculator" exact={true} element={<EMICalculator />} />
      <Route path="/calculators/car-loan-emi-calculator" exact={true} element={<CarLoanEMICalculator />} />
      <Route path="/calculators/home-loan-emi-calculator" exact={true} element={<HomeLoanEMICalculator />} />
      <Route path="/calculators/simple-interest-calculator" exact={true} element={<SimpleInterestCalculator />} />
      <Route path="/calculators/compound-interest-calculator" exact={true} element={<CompoundInterestCalculator />} />
      <Route path="/calculators/gratuity-calculator" exact={true} element={<GratuityCalculator />} />
      <Route path="/calculators/gst-calculator" exact={true} element={<GSTCalculator />} />
      <Route path="/calculators/salary-calculator" exact={true} element={<SalaryCalculator />} />
      <Route path="/calculators/inflation-calculator" exact={true} element={<InflationCalculator />} />

      <Route path="*" exact={true} element={<NotFound />} />

    </Routes>
  );
};

export default Router;
