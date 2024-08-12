import { RiseLoader } from "react-spinners";

const Loader = ({ title }) => {
    return <div className="loader flex-row">
        <RiseLoader color="#ef5488" className="inner_loader" />
        <div className="heading-loader">{title}</div>
    </div>;
};

export default Loader;