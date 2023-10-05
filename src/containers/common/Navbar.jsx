import { Logo } from "@/components";
import Link from "next/link";
import Image from "next/image";
import github from "../../../public/github-mark-white.svg";

const Navbar = () => {
  return (
    <>
      <section className="bg-background">
        <div className="flex justify-between p-5 md:p-10">
          <Logo />

          <Link
            href="https://github.com/JC-Coder/startease"
            className="mx-10 transition ease-in-out delay-150 hover:scale-110 hover:rotate-12"
          >
            <Image src={github} alt="Github logo" width="40" height="40" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
