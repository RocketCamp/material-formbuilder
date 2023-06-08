import React from "react";

import { Box, Button, Grid } from "@mui/material";

import FormBuilderText from "./text";
import FormBuilderPassword from "./password";
import FormBuilderCheckbox from "./checkbox";
import FormBuilderSelect from "./select";

function FormBuilder(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        props.handleSubmit(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Box component={Grid} container spacing={2}>
                {props.fields.map((list, index) => {
                    list.disabled = props.disabled;
                    return (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={12 * (list.width || 1)}
                        >
                            {(list.type === "text" ||
                                list.type === "email" ||
                                list.type === "integer" ||
                                !list.type) && <FormBuilderText {...list} />}
                            {list.type === "password" && (
                                <FormBuilderPassword {...list} />
                            )}
                            {list.type === "checkbox" && (
                                <FormBuilderCheckbox {...list} />
                            )}
                            {list.type === "select" && (
                                <FormBuilderSelect {...list} />
                            )}
                        </Grid>
                    );
                })}
                <Grid item xs={12} sm={12}>
                    <Button
                        type="submit"
                        sx={{ width: "100%" }}
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={props.disabled}
                    >
                        {props.submitText ? props.submitText : "Submit"}
                    </Button>
                </Grid>
            </Box>
        </Box>
    );
}
export default FormBuilder;
