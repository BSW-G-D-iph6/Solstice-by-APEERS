import { FaInstagram, FaPinterest } from "react-icons/fa";
import { SiKofi } from "react-icons/si";


export function FooterComp() {
    const time = new Date()
    return (
        <>
            { /* Footer */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ backgroundColor: '#343A3F', bottom: 0 }}>
                { /* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    { /* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    { /* Left */}

                    { /* Right */}
                    <div>
                        <a href="https://www.instagram.com/gdsimpson3.3/" className="me-4 text-reset">
                            <i className="fab fa-instagram">
                                <FaInstagram />

                            </i>

                            {/* <i className="fab fa-facebook-f"></i> */}
                        </a>
                        {/* <a href="https://in.pinterest.com/primepickz_47/" className="me-4 text-reset">
                            <i className="fab fa-instagram">
                                <FaPinterest />

                            </i>

                        </a> */}
                        {/* <a href="https://ko-fi.com/primepickz_47" className="me-4 text-reset">
                            <i className="fab fa-google"><SiKofi /></i>
                        </a> */}
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    { /* Right */}
                </section>
                { /* Section: Social media */}

                { /* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        { /* Grid row */}
                        <div className="row mt-3">
                            { /* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                { /* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Gavin Simpson
                                </h6>
                                <p>
                                    Technology 2024
                                </p>
                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    T&Cs
                                </h6>
                                <p>
                                    <a href="https://fevid.vercel.app/terms" className="text-reset">Website</a>
                                </p>
                                <p>
                                    <a href="/terms/currency" className="text-reset">Currency</a>
                                </p>
                                <p>
                                    <a href="/terms/payments" className="text-reset">Payments</a>
                                </p>

                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    links
                                </h6>
                                <p>
                                    <a href="https://ko-fi.com/primepickz_47" className="text-reset">GIT</a>
                                </p>
                                <p>
                                    <a href="https://in.pinterest.com/primepickz_47/" className="text-reset">website</a>
                                </p>
                                <p>
                                    <a href="https://simple.bio/primepickz_47" className="text-reset">Hackathon</a>
                                </p>
                                <p>
                                    <a href="https://api.whatsapp.com/message/4AEV4BX7TXMBM1?autoload=1&app_absent=0" className="text-reset">news</a>
                                </p>
                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-print me-3"></i>IG: @gdsimpson3.3</p>
                                {/* <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    gdsimpson3.cdrone3@example.com
                                </p> */}
                                <h6 className="text-uppercase fw-bold mb-4">Email</h6>

                                {/* <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p> */}
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    gdsimpson3.cdrone3@gmail.com
                                </p>
                            </div>
                            { /* Grid column */}
                        </div>
                        { /* Grid row */}
                    </div>
                </section>
                { /* Section: Links  */}

                { /* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © {time.getFullYear()} Copyright:
                    <a className="text-reset fw-bold" href="https://www.instagram.com/gdsimpson3.3/">Gavin</a>
                </div>
                { /* Copyright */}
            </footer>
            { /* Footer */}
        </>
    )
}