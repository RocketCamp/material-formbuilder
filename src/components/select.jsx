import React, { useState, useEffect } from "react";

import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";

function FormBuilderSelect(props) {
    const [value, setValue] = useState(props.value || "");

    useEffect(() => {
        setValue(props.value || "");
    }, [props.value]);

    let builderProps = {};
    builderProps.label = props.label;
    builderProps.labelId = "label-" + props.name;
    builderProps.name = props.name;
    builderProps.required = props.required;
    builderProps.value = value;
    builderProps.disabled = props.disabled;
    builderProps.onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={builderProps.labelId}>
                {builderProps.label}
            </InputLabel>
            <Select {...builderProps}>
                {!builderProps.required && (
                    <MenuItem value="">Не выбрано</MenuItem>
                )}
                {props.select.items &&
                    props.select.items.map((list, index) => {
                        return (
                            <MenuItem
                                value={list[props.select.value]}
                                key={index}
                            >
                                <>
                                    {typeof props.select.label === "function"
                                        ? props.select.label(list)
                                        : list[props.select.label]}
                                </>
                            </MenuItem>
                        );
                    })}
            </Select>
        </FormControl>
    );
}

export default FormBuilderSelect;
