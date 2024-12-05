import SpecificLayout from "./specific-layout/layout";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return <SpecificLayout>{children}</SpecificLayout>;
};

export default EventLayout;
