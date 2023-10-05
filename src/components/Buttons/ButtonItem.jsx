import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const ButtonItem = ({ children, linkSrc }) => {
  return (
    <>
      <Button
        as={Link}
        href={linkSrc}
        color="primary"
        size="lg"
        variant="bordered"
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonItem;
