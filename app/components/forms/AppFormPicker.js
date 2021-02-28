import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

const AppFormPicker = ({
  items,
  name,
  width,
  placeholder,
  numColumns = 1,
  PickerItemComponent,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  console.log(values[name]);
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numColumns={numColumns}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
