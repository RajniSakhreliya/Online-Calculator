import savingSchemeSidebar from '../assets/images/savings-scheme-sidebar.webp';


const CInvestNow = () => {
    return (
        <div className="investNow">
            <img className=""
                src={savingSchemeSidebar}
                width="150"
                alt="Close"
                loading="lazy" />

            <div className="font-18 bold mt-3">Invest the way you want</div>
            <div className="font-12 mt-3" style={{ textAlign: 'center' }}>Join millions of Peoples who trust and love us.</div>
            <a href="#" className="text-decoration-none w-100 mt-3">
                <div className="btn-primary w-100">Explore Products</div>
            </a>
        </div>
    );
}

export default CInvestNow;