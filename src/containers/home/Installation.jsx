import { Terminal, Typography } from "@/components";
import { Tabs, Tab } from "@nextui-org/tabs";

const Installation = () => {
  return (
    <>
      <section id="installation" className="grid justify-center max-w-5xl mx-auto px-5 py-14 md:px-20 gap-14 md:gap-24 md:my-20 ">
        <div>
          <Typography variant="h2">Installation</Typography>
        </div>
        <div className="flex gap-2 md:gap-10">
          <div>
            <span className="bg-secondary px-3 py-1 rounded-md">
              <Typography variant="p.medium">1</Typography>
            </span>
          </div>
          <div className="flex-1 flex flex-wrap gap-10">
            <div className="flex md:w-96 flex-col gap-5 ">
              <Typography variant="h2">
                Install <span className="text-secondary">StartEase</span>
              </Typography>
              <Typography variant="p">
                Run the following command to install{" "}
                <span className="text-secondary">StartEase</span> globally.
              </Typography>
            </div>
            <div className="flex-1 flex flex-col ">
              <Tabs variant="underlined" color="success" aria-label="Options">
                <Tab title={<Typography variant="p.medium">Npm</Typography>}>
                  <Terminal code="npm install -g startease-cli" />
                </Tab>
                <Tab title={<Typography variant="p.medium">Yarn</Typography>}>
                  <Terminal code="yarn global add startease-cli" />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:gap-10">
          <div>
            <span className="bg-secondary px-3 py-1 rounded-md">
              <Typography variant="p.medium">2</Typography>
            </span>
          </div>
          <div className="flex-1 flex flex-wrap  gap-10 justify-between">
            <div className="flex md:w-96 flex-col gap-5 ">
              <Typography variant="h2">Usage Guide</Typography>
              <Typography variant="p">
                Generate new projects swiftly using{" "}
                <span className="text-secondary">StartEase</span>.
              </Typography>
            </div>
            <div className="flex-1 flex flex-col ">
              <Terminal code="startease-cli" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:gap-10">
          <div>
            <span className="bg-secondary px-3 py-1 rounded-md">
              <Typography variant="p.medium">3</Typography>
            </span>
          </div>
          <div className="">
            <Typography variant="h2">
              {" "}
              Follow the prompts to select your project type, framework, and
              complexity.
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
};

export default Installation;
