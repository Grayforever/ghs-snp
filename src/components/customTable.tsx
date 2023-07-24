import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    styled,
    tableCellClasses,
    TableContainer
} from '@mui/material';

interface RowData {
    district: string;
    hospital: number;
    healthCenters: number;
    chps: number;
    privateChag: number;
}

interface CustomTableProps {
    data: RowData[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
    const getTotal = (field: keyof RowData) => {
        return data.reduce((acc, item) => acc + Number(item[field]), 0);
    };

    const grandTotal: RowData = {
        district: 'Grand Total',
        hospital: getTotal('hospital'),
        healthCenters: getTotal('healthCenters'),
        chps: getTotal('chps'),
        privateChag: getTotal('privateChag'),
    };

    return (
        <Paper elevation={0}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>SN</StyledTableCell>
                            <StyledTableCell>District</StyledTableCell>
                            <StyledTableCell>Hospital</StyledTableCell>
                            <StyledTableCell>Health Centers</StyledTableCell>
                            <StyledTableCell>CHPS</StyledTableCell>
                            <StyledTableCell>PRIVATE/CHAG</StyledTableCell>
                            <StyledTableCell>Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{index + 1}</StyledTableCell>
                                <StyledTableCell>{row.district}</StyledTableCell>
                                <StyledTableCell>{row.hospital}</StyledTableCell>
                                <StyledTableCell>{row.healthCenters}</StyledTableCell>
                                <StyledTableCell>{row.chps}</StyledTableCell>
                                <StyledTableCell>{row.privateChag}</StyledTableCell>
                                <StyledTableCell>
                                    {row.hospital + row.healthCenters + row.chps + row.privateChag}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <StyledTableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell sx={{ fontWeight: "bold" }}>Grand Total</StyledTableCell>
                            <StyledTableCell>{grandTotal.hospital}</StyledTableCell>
                            <StyledTableCell>{grandTotal.healthCenters}</StyledTableCell>
                            <StyledTableCell>{grandTotal.chps}</StyledTableCell>
                            <StyledTableCell>{grandTotal.privateChag}</StyledTableCell>
                            <StyledTableCell>
                                {grandTotal.hospital + grandTotal.healthCenters + grandTotal.chps + grandTotal.privateChag}
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default CustomTable;
