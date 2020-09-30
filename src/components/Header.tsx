import * as React from "react";
import { CustomStyles } from "../types";
import { Typography, WithStyles, withStyles } from "@material-ui/core";
import { styles } from "../styles/header";
import { withCustomStyles } from "../HOCs/with-custom-styles";

interface Props extends WithStyles<typeof styles> {
  customStyles?: CustomStyles;
}

const Header: React.FC<Props> = props => {
  const { classes, customStyles } = props;
  return (
    <Typography
      className={ classes.header }
      style={ customStyles?.header }
    >
      Tadaa
    </Typography>
  );
}

const withDefaultStyles = withStyles(styles)(Header);

export default withCustomStyles(withDefaultStyles);