import * as React from "react";

export type DataItem = {
  district: string;
  hospital: number;
  healthCenters: number;
  chps: number;
  privateChag: number;
};

export interface RegionalProps {
  regionalHook?: ReturnType<typeof RegionalHook>;
}

export type ButtonTypes = {
  label: string;
  value: string;
};

const sampleData: DataItem[] = [
  {
    district: "District A",
    hospital: 5,
    healthCenters: 10,
    chps: 15,
    privateChag: 20,
  },
  {
    district: "District B",
    hospital: 8,
    healthCenters: 12,
    chps: 18,
    privateChag: 25,
  },
  {
    district: "District C",
    hospital: 7,
    healthCenters: 14,
    chps: 20,
    privateChag: 30,
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
  "Savanah Region",
  "Northern Region",
  "Bono East Region",
  "Oti Region",
  "Ahafo Region",
  "Western Region",
  "North East Region",
];

const RegionalHook = () => {
  const [active, setActive] = React.useState<string>("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setActive(newAlignment);
  };
  return { sampleData, toggleButtons, regions, active, handleChange };
};

export default RegionalHook;
