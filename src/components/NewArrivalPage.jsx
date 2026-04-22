import HeroBanner from "./HeroBanner";
import NewArrivalProducts from "./NewArrivalProducts";

const NewArrivalPage = () => {
  return (
    <>
      <HeroBanner
        title="New Arrival"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "New Arrival" },
        ]}
      /> 
      <NewArrivalProducts showViewAll={false} />
      <div className="my-4"></div>
    </>
  );
};

export default NewArrivalPage;
