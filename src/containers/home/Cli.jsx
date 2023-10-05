import Image from "next/image";
import StartEase from "../../../public/startease.webp";

const Cli = () => {
  return (
    <>
      <section className="bg-background">
        <div className="flex justify-center">
          <div className="py-10">
            <Image
              src={StartEase}
              width="900"
              height="900"
              alt="StartEase Cli Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cli;
