import { ButtonItem, Typography } from "@/components";

const Hero = () => {
  return (
    <>
      <section className="bg-background">
        <div className="flex justify-center ">
          <div className=" grid gap-5 md:gap-10 justify-items-center text-center py-5 md:py-10 px-5 md:px-10">
            <div className="max-w-5xl ">
              <Typography variant="h1">
                <span className="text-secondary">StartEase</span> streamlines
                your project setup process with ease.
              </Typography>
            </div>
            <div className="max-w-3xl py-7">
              <Typography variant="p">
                StartEase is a versatile command-line tool designed to simplify
                the process of starting a new project. Built for both Backend
                and Frontend developers, StartEase helps you create robust
                projects foundations in just a few simple steps.
              </Typography>
            </div>
            <div className="py-5">
              <ButtonItem linkSrc={"#installation"}>Get Started</ButtonItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
