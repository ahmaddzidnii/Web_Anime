import { animeStatusList } from "@/constant/data-anime";

export const getValueStatusByLabel = (value) => {
  const selectedOption = animeStatusList.find(
    (option) => option.label === value
  );
  return selectedOption?.value || value;
};
