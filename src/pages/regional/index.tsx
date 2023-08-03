import {
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardHeader,
} from "@mui/material";
import Doctor from "../../assets/images/doctor_woman.png";
import CustomTable from "../../components/customTable";
import RegionalHook, { DataItem, RegionalProps } from "./regionalHook";

const Regional: React.FC<RegionalProps> = ({
  regionalHook = RegionalHook(),
}) => {
  const { sampleData, active }: { sampleData: DataItem[]; active: string } =
    regionalHook;

  return (
    <Box pt={24} pb={{ xs: 6, md: 12 }}>
      <Stack mx={{ xs: 2, md: 5 }}>
        {active !== "" ? (
          <CustomTable data={sampleData} />
        ) : (
          <Card
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            elevation={0}
          >
            <CardHeader
              sx={{ display: { md: "none" } }}
              title="Regional Overview"
            />
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: 360, lg: 400, xl: 500 },
                height: { xs: "auto", md: "auto" },
              }}
              src={Doctor}
              alt="Image of the president"
            />
            <CardContent>
              <Stack alignItems={"center"} sx={{ display: { md: "none" } }}>
                <Typography color={"primary"}>Dr. Alberta Mojo Fako</Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Regional Director
                </Typography>
              </Stack>
              <Stack
                justifyContent={"space-between"}
                flexGrow={1}
                sx={{ textAlign: "start", minHeight: "100%" }}
                spacing={2}
              >
                <Typography
                  variant={"h6"}
                  fontWeight={"bold"}
                  sx={{ display: { xs: "none", md: "inherit" } }}
                >
                  Regional overview
                </Typography>
                <Typography color={"text.secondary"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed.
                </Typography>
                <Box sx={{ display: { xs: "none", md: "initial" } }}>
                  <Typography color={"primary"}>
                    Dr. Alberta Mojo Fako
                  </Typography>
                  <Typography variant="subtitle2">Regional Director</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}

        <CustomTable data={sampleData} />
      </Stack>
    </Box>
  );
};

export default Regional;
