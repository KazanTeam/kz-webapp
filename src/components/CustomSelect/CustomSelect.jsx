import React from 'react';
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import FormControl from "material-ui/Form/FormControl";
import InputLabel from "material-ui/Input/InputLabel";
import Select from "material-ui/Select";
import MenuItem from "material-ui/Menu/MenuItem";
import customSelectGroupStyle from "assets/jss/material-dashboard-pro-react/page/customSelectGroupStyle.jsx";

function CustomSelect({...props}) {
  const {
    classes,
    data,
    onChange,
    placeholder,
    input
  } = props;
  return (
    <FormControl
      fullWidth
      className={classes.selectFormControl}
    >
      <InputLabel
        htmlFor="simple-select"
        className={classes.selectLabel}
      >
        {placeholder ? placeholder : ''}
      </InputLabel>
      <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={input.value}
        onChange={onChange}
        inputProps={{
          name: "simpleSelect",
          id: "simple-select"
        }}
      >
        {data.map((item, index) => (
          <MenuItem
            key={index}
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected
            }}
            value={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  data: PropTypes.array.isRequired,
};

export default withStyles(customSelectGroupStyle)(CustomSelect);
