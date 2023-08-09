import { useSharedState } from "../../context/sharedSlateContext";
export type GhanaDistricts = {
  [region: string]: string[];
};

export type DistrictTypes = {
  sn: number;
  district: string;
  hospital: number;
  healthCenters: number;
  chps: number;
  privateChag: number;
};

export type ReportTypes = {
  sn: number;
  reportTitle: string;
  dateUpdate: string;
};

export type InnovationTypes = {
  sn: number;
  practiceInnovation: string;
  dateUpdate: string;
};

export type TableDataTypes = {
  [key: string]: Array<DistrictTypes | InnovationTypes | ReportTypes>;
};

export interface RegionalProps {
  regionalHook?: ReturnType<typeof RegionalHook>;
}

export type ButtonTypes = {
  label: string;
  value: string;
};

const districts: DistrictTypes[] = [
  {
    sn: 1,
    district: "District A",
    hospital: 5,
    healthCenters: 10,
    chps: 15,
    privateChag: 20,
  },
  {
    sn: 2,
    district: "District B",
    hospital: 8,
    healthCenters: 12,
    chps: 18,
    privateChag: 25,
  },
  {
    sn: 3,
    district: "District C",
    hospital: 7,
    healthCenters: 14,
    chps: 20,
    privateChag: 30,
  },
];

const reports: ReportTypes[] = [
  {
    sn: 1,
    reportTitle: "Greater Accra Safety Net Presentation 2023",
    dateUpdate: "29-02-2023",
  },
  {
    sn: 2,
    reportTitle: "Greater Accra Safety Net Presentation 2022",
    dateUpdate: "31-03-2022",
  },
  {
    sn: 3,
    reportTitle: "Greater Accra Safety Net Presentation 2021",
    dateUpdate: "05-02-2021",
  },
  {
    sn: 4,
    reportTitle: "Greater Accra Safety Net Presentation 2020",
    dateUpdate: "03-08-2020",
  },
];

const innovations: InnovationTypes[] = [
  {
    sn: 1,
    practiceInnovation: "A Adolescent - Friendly Reproductive Health Visit",
    dateUpdate: "29-02-2023",
  },
];

const toggleButtons: ButtonTypes[] = [
  { label: "Implementing Districts", value: "districts" },
  { label: "Implementing Health Facilities", value: "facilities" },
  { label: "Regional Reports", value: "reports" },
  { label: "Best Practices/Innovations", value: "innovations" },
];

const regions: string[] = [
  "Ashanti Region",
  "Eastern Region",
  "Volta Region",
  "Greater Accra Region",
  "Central Region",
  "Bono Region",
  "Upper East Region",
  "Upper West Region",
  "Western North Region",
  "Savannah Region",
  "Northern Region",
  "Bono East Region",
  "Oti Region",
  "Ahafo Region",
  "Western Region",
  "North East Region",
];

const ghanaDistricts: GhanaDistricts = {
  "Greater Accra Region": ["Accra", "Tema", "Ga West", "Adenta", "Ashaiman"],
  "Ashanti Region": [
    "Kumasi",
    "Obuasi",
    "Asokore Mampong",
    "Effiduase",
    "Bekwai",
  ],
  "Eastern Region": ["Koforidua", "Nkawkaw", "Akim Oda", "Suhum", "Akropong"],
  "Central Region": [
    "Cape Coast",
    "Kasoa",
    "Mankessim",
    "Winneba",
    "Assin Fosu",
  ],
  "Western Region": ["Sekondi-Takoradi", "Tarkwa", "Axim", "Bibiani", "Bodi"],
  "Western North Region": ["Sefwi Wiawso", "Juaboso", "Bia", "Enchi", "Bodi"],
  "Volta Region": ["Ho", "Hohoe", "Keta", "Aflao", "Akatsi"],
  "Oti Region": ["Dambai", "Jasikan", "Kadjebi", "Nkwanta", "Biakoye"],
  "Northern Region": ["Tamale", "Yendi", "Savelugu", "Bimbilla", "Salaga"],
  "North East Region": [
    "Nalerigu",
    "Walewale",
    "Gambaga",
    "Bunkpurugu",
    "Chereponi",
  ],
  "Savannah Region": ["Damongo", "Buipe", "Salaga", "Sawla", "Yapei"],
  "Upper East Region": ["Bolgatanga", "Navrongo", "Bawku", "Zebilla", "Paga"],
  "Upper West Region": ["Wa", "Nadowli", "Lawra", "Jirapa", "Tumu"],
  "Ahafo Region": [
    "Goaso",
    "Bechem",
    "Duayaw Nkwanta",
    "Tano South",
    "Asunafo North",
  ],
  "Bono Region": ["Sunyani", "Berekum", "Techiman", "Nkoranza", "Wenchi"],
  "Bono East Region": ["Kintampo", "Techiman", "Nkoranza", "Atebubu", "Pru"],
  "Central East Region": [
    "Akyem Tafo",
    "Akyem Swedru",
    "Asamankese",
    "Akropong",
    "Adukrom",
  ],
};

const tableData = {
  districts: districts,
  facilities: districts,
  reports: reports,
  innovations: innovations,
};

const RegionalHook = () => {
  const { sharedState } = useSharedState();

  const getDistrictByRegion = (region: string): string[] => {
    return ghanaDistricts[region];
  };
  const defaultDistricts = ghanaDistricts[regions[0]];

  return {
    toggleButtons,
    regions,
    sharedState,
    tableData,
    defaultDistricts,
    getDistrictByRegion,
  };
};

export default RegionalHook;
