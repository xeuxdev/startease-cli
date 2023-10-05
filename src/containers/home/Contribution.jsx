import { ButtonItem, Typography } from "@/components";

const Contribution = () => {
  return (
    <>
      <section className=" py-10 md:my-10">
        <div className="grid gap-7 justify-center justify-items-center ">
          <Typography variant="h2">How can I get involved ?</Typography>
          <span className=" px-3 text-center">
            <Typography variant="p">
              We appreciate contributions from the community to enhance
              <span className="text-secondary"> StartEase</span> . <br></br>Here
              is how you can get involved.
            </Typography>
          </span>{" "}
          <ButtonItem linkSrc={"https://github.com/JC-Coder/startease"}>
            Visit GitHub Repository
          </ButtonItem>
        </div>
      </section>
    </>
  );
};

export default Contribution;
