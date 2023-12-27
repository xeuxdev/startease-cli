import { Card, CardHeader } from "@/components/card"
import Code from "@/components/code"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/ui/step"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "../../public/startease.webp"
import UsageCount from "@/components/usage-count"

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center p-8 text-[#D0D0D0] flex-col gap-5">
        <h1 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold md:[text-wrap:balance] py-20 ">
          Welcome to <span className="text-[#B50101]">StartEase, </span>
          Streamline Your Project Setup Process with Ease
        </h1>
        <p className="text-base text-center md:text-lg [text-wrap:balance]">
          <span className="text-[#B50101]">StartEase </span> is a versatile
          command-line tool designed to simplify the process of starting new
          projects. Whether you&apos;re a backend developer diving into
          Express.js or Nest.js, or a frontend enthusiast embracing React.js,
          StartEase empowers you to create robust project foundations in just a
          few simple steps.
        </p>

        <Button className="my-20" asChild>
          <Link href={"https://github.com/JC-Coder/startease"} target="_blank">
            Get Started
          </Link>
        </Button>

        <div className="  h-[22.9375rem] w-full md:w-[46.25rem] relative">
          <Image src={HeroImage} alt="StartEase cli" />
        </div>
        {/* <div className="p-8 bg-gradient-to-br rounded-3xl from-secondary to-[#0401B5]  h-[22.9375rem] w-full md:w-[46.25rem] flex items-center justify-center">
          <p>Picture</p>
        </div> */}
      </section>

      {/* steps */}
      <section className="my-[6.25rem] px-5 flex flex-col gap-10 container">
        {/* installation */}
        <Card>
          <StepIndicator step={1} />
          <CardHeader>Installation</CardHeader>
          <p>
            Setting up StartEase is effortless. Follow these steps to get
            started Open your terminal. Run the following command to install
            StartEase globally:
          </p>

          <p>npm</p>
          <Code snippet={"npm install -g startease-cli"} />

          <p>yarn</p>
          <Code snippet={"yarn global add startease-cli"} />

          <p>pnpm</p>
          <Code snippet={"pnpm install startease-cli"} />
        </Card>
        {/*  */}
        <Card>
          <StepIndicator step={2} />
          <CardHeader>Usage Guide</CardHeader>
          <p>Generate new projects swiftly using StartEase:</p>

          <p>
            Open your terminal Run the following command to launch the CLI tool
          </p>
          <Code snippet={"startease-cli"} />
        </Card>

        {/*  */}
        <Card>
          <StepIndicator step={3} />
          <p>
            Answer the prompts to select your project type, framework, and
            complexity. Sit back as StartEase automates file creation and
            project setup. With StartEase, you can focus on building your vision
            without being bogged down by setup complexities.
          </p>
        </Card>
      </section>

      {/* features */}

      <section className="my-[6.25rem] flex flex-col container">
        <div className="flex flex-col items-center justify-center gap-6 mb-[6.25rem] px-5">
          <h2 className="text-xl text-center md:text-2xl lg:text-3xl text-primary">
            Features
          </h2>

          <p className="text-primary">Experience the power of StartEase:</p>
        </div>

        {/* features */}

        <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2">
          <Card>
            <StepIndicator step={1} />
            <p>
              <span className="font-bold text-white">Effortless Setup:</span>{" "}
              Say goodbye to tedious project setup tasks. Let StartEase handle
              the heavy lifting.
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
        <UsageCount />

        <div className="flex flex-col items-center justify-center gap-6 mb-[4.675rem]">
          <h3 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl text-primary">
            Contribution Guidelines
          </h3>

          <p className="text-center text-primary">
            We appreciate contributions from the community to enhance StartEase.
            Here&apos;s how you can get involved:
          </p>

          <Button asChild>
            <Link href={"https://github.com/JC-Coder/startease"}>
              Get Started
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
