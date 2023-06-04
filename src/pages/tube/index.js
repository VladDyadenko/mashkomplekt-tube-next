import Filter from "@/components/Filter/Filter";

const Tube = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full max-w-full flex items-start">
          <div className="w-[250px] p-4 bg-[#f3f6fa] rounded mr-3">
            <Filter />
          </div>
          <div>
            <h2>Tubes</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tube;
