
const Footer = () => {
    return (
        <div>
            <footer className="footer p-20 bg-[#1A1919] text-neutral-content">
                <nav>
                    <h2 className="text-xl font-[700]">CareerHub</h2>
                    <p className="text-[10px]">There are many variations of passages <br></br> of Lorem Ipsum , but the majority have <br></br> suffered alteration in some form.</p>
                    <img src="..\src\assets\icons\social.png" alt="" />
                </nav>
              
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover"> Sales</a>
                    <a className="link link-hover"> Become a Partner</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>
        </div>
    );
};

export default Footer;