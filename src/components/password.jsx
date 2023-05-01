import React from "react";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputLabel,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

function FormBuilderPassword(props) {
    const [value, setValue] = React.useState(props.value || "");
    const [showPassword, setShowPassword] = React.useState(false);

    React.useEffect(() => {
        setValue(props.value || "");
    }, [props.value]);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    let builderProps = {};
    builderProps.disabled = props.disabled;
    builderProps.name = props.name;
    builderProps.fullWidth = true;
    builderProps.label = props.label;
    // builderProps.value = value;
    builderProps.required = props.required;
    builderProps.inputprops = {};
    builderProps.inputprops.readOnly = props.readOnly || false;
    builderProps.helpertext = props.helper;

    // builderProps.onChange = (event) => {
    //     setValue(event.target.value);
    //     alert(123);
    //     props.handleChange(event.target.value);
    // };

    return (
        <FormControl variant="outlined" sx={{ width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
                {builderProps.label}
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...builderProps}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
            {builderProps.helpertext && (
                <FormHelperText>{builderProps.helpertext}</FormHelperText>
            )}
        </FormControl>
    );
}
export default FormBuilderPassword;
