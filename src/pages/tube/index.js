import Filter from "@/components/Filter/Filter";
import { Container, Paper } from "@mui/material";

const Tube = () => {
  return (
    <Container>
      <section>
        <div className="container">
          <div className="w-full max-w-full flex items-start">
            <div className="w-[200px] p-4 bg-[#f3f6fa] rounded mr-3">
              <Filter />
            </div>
            <div>
              <h2>Tubes</h2>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Tube;
