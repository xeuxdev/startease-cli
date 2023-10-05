const Typography = ({ variant, children }) => {
  let className = "";

  switch (variant) {
    case "h1":
      className =
        "font-Plus-Jakarta-Sans text-white  text-[2rem] md:text-[4rem] font-bold leading-[1.2] md:leading-none";
      break;
    case "h2":
      className =
        "font-Plus-Jakarta-Sans text-white  text-2xl md:text-[2rem] font-bold md:leading-tight";
      break;
    case "h3":
      className = "font-montserrat text-white  font-semibold text-lg";
      break;
    case "h4":
      className =
        "font-montserrat font-bold text-[0.8125rem] md:text-base leading-loose-light md:leading-loose-light";
      break;
    case "p":
      className =
        "font-montserrat text-white  text-base md:text-lg leading-loose-light md:leading-loose-strong";
      break;

    case "p.medium":
      className =
        "font-montserrat font-medium text-[0.8125rem] text-white  md:text-sm leading-loose-strong md:leading-loose-strong";
      break;
    case "p.link":
      className =
        "font-montserrat hover:text-purple-800 font-medium text-white  text-base md:text-base leading-loose-light md:leading-loose-strong";
      break;
    default:
      break;
  }

  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
};

export default Typography;
