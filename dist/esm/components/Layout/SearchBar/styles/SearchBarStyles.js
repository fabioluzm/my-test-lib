import * as variables from "../../../../themes/theme-variables";
import { styled } from "@mui/material/styles";
import { Grid, InputBase } from "@mui/material";
//searchbar
export var BoxSearchBar = styled(Grid)(function () { return ({
    backgroundColor: "white",
    borderRadius: variables.borderRadius_50,
    boxShadow: variables.boxShadow_default,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}); });
//input
export var SearchBarOpenedInput = styled(InputBase)(function () { return ({
    padding: "7px 13px 5px 13px",
    fontSize: "13px !important",
    width: "100%",
}); });
//# sourceMappingURL=SearchBarStyles.js.map