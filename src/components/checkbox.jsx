import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

function FormBuilderCheckbox(props) {
    // builderProps.onChange = (event) => {
    //     setValue(event.target.value);
    //     props.handleChange(event.target.value);
    // };
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        required={props.required}
                        disabled={props.disabled}
                        name="lgpd_agreement"
                    />
                }
                label={props.label}
                sx={{ opacity: props.disabled ? 0.7 : 1 }}
            />
        </FormGroup>
    );
}
export default FormBuilderCheckbox;
