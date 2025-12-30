import { Logo } from "@/media";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="max-w-[90vw] flex justify-center">
            <div className="">
                <Image src={Logo} alt="Logo" />

                
            </div>

            <div className="">

            </div>

            <div className=""></div>
        </nav>
    );
}
