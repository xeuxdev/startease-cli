import { CardItem, Typography } from "@/components";

const Features = () => {
  return (
    <>
      <section className="grid justify-center md:justify-items-center gap-10 px-5 py-14 md:py-10 md:my-20">
        <div className="py-5 md:py-10 ">
          <Typography variant="h1">Features</Typography>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <CardItem
            heading={"Effortless Setup"}
            body={
              "Say goodbye to tedious project setup tasks. Let StartEase handle the heavy lifting."
            }
          />
          <CardItem
            heading={"Framework Flexibility"}
            body={
              "Supports popular frameworks like Express.js, Nest.js, and React.js."
            }
          />
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <CardItem
            heading={"Basic or Advanced"}
            body={
              "Choose between basic or advanced project configurations based on your needs."
            }
          />
          <CardItem
            heading={"Customization"}
            body={
              "Extend and customize generated files to match your project's unique requirements."
            }
          />
        </div>
      </section>
    </>
  );
};

export default Features;
