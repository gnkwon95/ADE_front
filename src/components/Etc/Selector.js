import React from "react";
import { Controller } from "react-hook-form";
import { Select } from "antd";

export const SelectYear = ({ control, name }) => {
  return (
    <Controller
      name={name ? name : null}
      as={Select}
      options={[
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
        { value: "2018", label: "2018" },
        { value: "2017", label: "2017" },
        { value: "2016", label: "2016" },
        { value: "2015", label: "2015" },
        { value: "2014", label: "2014" },
        { value: "B2013", label: "2013 이전" },
      ]}
      defaultValue="2020"
      control={control}
      rules={{ required: true }}
      style={{ width: 120 }}
    />
  );
};

export const SelectMonth = ({ control, name, onChange }) => {
  return (
    <Controller
      name={name}
      as={Select}
      onChange={onChange ? onChange : null}
      options={[
        { value: "01", label: "1" },
        { value: "02", label: "2" },
        { value: "03", label: "3" },
        { value: "04", label: "4" },
        { value: "05", label: "5" },
        { value: "06", label: "6" },
        { value: "07", label: "7" },
        { value: "08", label: "8" },
        { value: "09", label: "9" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
      ]}
      defaultValue="1"
      control={control}
      rules={{ required: true }}
      style={{ width: 120 }}
    />
  );
};
