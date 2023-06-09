import Filter from "@/components/Filter/Filter";
import HeadSite from "@/components/seo/HeadSite";
import { Container, Grid, Paper } from "@mui/material";
import { seoHeadTubes } from "../../assets/constants/HeadSeo";
import PipeCard from "@/components/PipeCard/PipeCard";
import { pipes } from "@/assets/constants/pipes";

const Tube = () => {
  return (
    <>
      <HeadSite
        title={seoHeadTubes.title}
        keywords={seoHeadTubes.keywords}
        description={seoHeadTubes.description}
      ></HeadSite>
      <Container>
        <section>
          <div className="container">
            <div className="w-full max-w-full flex items-start xs:flex-col xs:items-center">
              <div className="w-[240px] p-4 bg-[#f3f6fa] rounded mr-3 xs:w-full">
                <Filter />
              </div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                className=""
              >
                {pipes.map((pipe, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <PipeCard pipe={pipe} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Tube;
