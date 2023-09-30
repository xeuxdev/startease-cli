import { Card, CardHeader } from "@/components/card"
import Code from "@/components/code"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/ui/step"
import Image from "next/image"
import Arrow from "../../public/arrow.svg"

export default function Home() {
  return (
    <main>
      <section className="min-h-[calc(100vh-84px)] flex items-center justify-center p-8 text-[#D0D0D0] flex-col gap-5">
        <h1 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold md:[text-wrap:balance] ">
          Welcome to{" "}
          <span className="text-[#B50101]">Project-starter-cli </span>
          Streamline Your Project Setup Process with Ease
        </h1>
        <p className="text-base text-center md:text-lg [text-wrap:balance]">
          <span className="text-[#B50101]">Project-starter-cli </span> is a
          versatile command-line tool designed to simplify the process of
          starting new projects. Whether you&apos;re a backend developer diving
          into Express.js or Nest.js, or a frontend enthusiast embracing
          React.js, Project-starter-cli empowers you to create robust project
          foundations in just a few simple steps.
        </p>

        <Button className="my-20">Get Started</Button>

        <div className="p-8 bg-gradient-to-br rounded-3xl from-secondary to-[#0401B5]  h-[22.9375rem] w-full md:w-[46.25rem] flex items-center justify-center">
          <p>Picture</p>
        </div>
      </section>

      {/* steps */}
      <section className="my-[6.25rem] px-5 flex flex-col gap-10 container">
        {/* installation */}
        <Card>
          <StepIndicator step={1} />
          <CardHeader>Installation</CardHeader>
          <p>
            Setting up Project-starter-cli is effortless. Follow these steps to
            get started Open your terminal. Run the following command to install
            Project-starter-cli globally:
          </p>

          <Code snippet={"npm install -g project-starter-cli"} />
        </Card>
        {/*  */}
        <Card>
          <StepIndicator step={2} />
          <CardHeader>Usage Guide</CardHeader>
          <p>Generate new projects swiftly using Project-starter-cli:</p>

          <Code
            snippet={
              "Open your terminal Run the following command to launch the CLI tool: project-starter"
            }
          />
        </Card>

        {/*  */}
        <Card>
          <StepIndicator step={3} />
          <p>
            Answer the prompts to select your project type, framework, and
            complexity. Sit back as Project-starter-cli automates file creation
            and project setup. With Project-starter-cli, you can focus on
            building your vision without being bogged down by setup
            complexities.
          </p>
        </Card>
      </section>

      {/* features */}

      <section className="my-[6.25rem] flex flex-col container">
        <div className="flex flex-col items-center justify-center gap-6 mb-[6.25rem]">
          <Button asChild className={"px-10 text-lg mx-auto text-center"}>
            <h2>Features</h2>
          </Button>

          <p className="text-primary">
            Experience the power of Project-starter-cli:
          </p>
        </div>

        {/* features */}

        <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2">
          <Card>
            <StepIndicator step={1} />
            <p>
              <span className="font-bold text-white">Effortless Setup:</span>{" "}
              Say goodbye to tedious project setup tasks. Let
              Project-starter-cli handle the heavy lifting.
            </p>
          </Card>
          {/*  */}
          <Card>
            <StepIndicator step={2} />
            <p>
              <span className="font-bold text-white">
                Framework Flexibility:
              </span>{" "}
              Supports popular frameworks like Express.js, Nest.js, and
              React.js.
            </p>
          </Card>
          {/*  */}
          <Card>
            <StepIndicator step={3} />
            <p>
              <span className="font-bold text-white">Basic or Advanced:</span>{" "}
              Choose between basic or advanced project configurations based on
              your needs.
            </p>
          </Card>
          {/*  */}
          <Card>
            <StepIndicator step={4} />
            <p>
              <span className="font-bold text-white">Customization:</span>{" "}
              Extend and customize generated files to match your project&apos;s
              unique requirements.
            </p>
          </Card>
        </div>
      </section>

      {/* contribution */}

      <section className="my-[6.25rem] flex flex-col container">
        <div className="flex flex-col items-center justify-center gap-6 mb-[4.675rem]">
          <Button asChild className={"p-7 text-lg mx-auto text-center"}>
            <h2>Contribution Guidelines</h2>
          </Button>

          <p className="text-primary text-center">
            We appreciate contributions from the community to enhance
            Project-starter-cli. Here&apos;s how you can get involved:
          </p>
        </div>

        {/* lists */}

        <div className="relative flex items-center justify-center w-full gap-10 px-5">
          <ul className="list-disc">
            <li>Fork the repository and clone your fork.</li>
            <li>Create a new branch for feature or bug fix.</li>
            <li>Develop and test your changes.</li>
            <li>Commit your changes and create a pull request.</li>
            <li>
              Our maintainers will review your pull request and provide
              feedback.
            </li>
            <li>
              Your contribution help make project starter cli better for
              everyone!.
            </li>
          </ul>

          <Image
            src={Arrow}
            alt=""
            className="-translate-y-20 hidden md:block"
          />
        </div>
      </section>
    </main>
  )
}
