import React from "react";

import { Box, TextField } from "@mui/material";

function FormBuilderText(props) {
    //const [value, setValue] = useState(props.value || "");
    // useEffect(() => {
    //     setValue(props.value || "");
    // }, [props.value]);

    let builderProps = {};
    builderProps.disabled = props.disabled;
    builderProps.fullWidth = true;
    builderProps.label = props.label;
    builderProps.name = props.name;
    builderProps.defaultValue = props.value;
    builderProps.required = props.required;
    builderProps.InputProps = {};
    builderProps.InputProps.readOnly = props.readOnly || false;
    builderProps.helperText = props.helper;

    if (props.error) {
        builderProps.error = true;
        builderProps.helperText = props.error;
    }
    if (props.type === "email") {
        builderProps.InputProps.type = "email";
    }
    if(props.rows){
        builderProps.multiline = true;
        builderProps.rows = props.rows;
    }

    // builderProps.onChange = (event) => {
    //     setValue(event.target.value);
    //     props.handleChange(event.target.value);
    // };
    return (
        <Box>
            <TextField {...builderProps} />
        </Box>
    );
}
export default FormBuilderText;
