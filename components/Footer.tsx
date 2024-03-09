import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="flex flex-col
            text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col
            flex-wrap justify-between gap-5 sm:px-16
            px-16 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" alt="Car Hub" width={118} height={16}
                        className="object-contain"/>
                        <p className="text-base text-gray-700">
                        Carhub {new Date().getFullYear()}<br/>
                        All Rights reserved &copy;
                        </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link, index) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">
                                {link.title}
                            </h3>
                            {link.links.map((link, index) => (
                                <Link key={link.title} href={link.url}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:pc-16 px-6 py-10">
                <p>@{new Date().getFullYear()} Carhub. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link href="/privacy-policy" className="text-gray-500">
                        <h3 className="font-bold">Privacy Policy</h3>
                    </Link>
                    <Link href="/terms-of-use" className="text-gray-500">
                        <h3 className="font-bold">Terms of Use</h3>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;