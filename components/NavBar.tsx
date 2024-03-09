import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const NavBar = () => {
    return (
        <nav className={"flex justify-between items-center p-4"}>
        <div>
            <Link href={"/"}>
                <Image src="/logo.svg" alt="Car Hub" width={100} height={100} />
            </Link>
        </div>
        <div>
            {/* <Link href={"/about"} className="mx-2">
                About
            </Link>
            <Link href={"/contact"} className={"mx-2"}>
                Contact
            </Link> */}

            <CustomButton
                title="Sign Up"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full bg-white min-w-[130px]"
            />
        </div>

        </nav>
    );
};

export default NavBar;