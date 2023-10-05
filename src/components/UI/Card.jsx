import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Typography } from "..";

const CardItem = ({ heading, body }) => {
  return (
    <>
      <Card className="bg-background transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 rounded-md max-w-[400px] drop-shadow-2xl">
        <CardHeader className="flex gap-3  border-b-2 border-gray-800">
          <span>
            <Typography variant="h2">{heading}</Typography>
          </span>
        </CardHeader>
        <CardBody>
          <Typography variant="p">{body}</Typography>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};

export default CardItem;
