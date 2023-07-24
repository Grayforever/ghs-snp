import { Card, CardContent, Stack, Typography, Box, Chip } from "@mui/material";
import { InfoOutlined, ArrowUpwardOutlined, ArrowDownwardOutlined } from "@mui/icons-material"
import Chart from "./chart";

const ChartCard = (props) => {
    return <Card component={Stack} elevation={props.hideBorder ? 1 : 0} flex={props.flex ?? 0.7} sx={{ borderRadius: 5, border: props.hideBorder ? "none" : "1px solid #000" }} >
        <CardContent sx={{ textAlign: "start" }} component={Stack} spacing={4}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Box color={props.hideBorder ?? "text.secondary"}>
                    <Typography fontWeight={"bold"}>{props.title}</Typography>
                    <Typography variant="caption">{props.subTitle}</Typography>
                </Box>

                {props.hideRecommendation ? null : <Chip color={props.error ? "error" : "primary"} label={"Recommendations"} sx={{ borderRadius: 2 }} icon={<InfoOutlined />} />}
            </Stack>

            <Stack direction={"row"} spacing={2} sx={{ display: props.hideBorder ? "none" : "flex" }}>
                <Typography fontWeight={"bold"} variant="h3">100</Typography>
                <Box color={"text.secondary"}>
                    <Typography fontWeight={"bold"}
                        color={props.error ? "error" : "primary"}
                        component={Stack}
                        direction={"row"}>
                        -23%
                        {props.error ? <ArrowDownwardOutlined /> : <ArrowUpwardOutlined />}
                    </Typography>
                    <Typography variant="caption">Based on previous month's performance</Typography>
                </Box>
            </Stack>

            <Chart />

        </CardContent>
    </Card>
}

export default ChartCard;