import React, { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { InputAdornment, IconButton } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

type UserPassFieldProps = TextFieldProps & {
  label: string;
  icon?: string;
  id?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  className?: string;
  sx?: object;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  fullWidth?: boolean;
  color?: string;
};

const UserPassField: React.FC<UserPassFieldProps> = ({
  label,
  icon,
  id,
  type,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required,
  className,
  sx,
  fullWidth = true,
  color = "#E4E4E4",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let iconComponent = null;
  let hasPasswordToggle = false;

  switch (icon) {
    case "person":
      iconComponent = <PersonOutlineOutlinedIcon fontSize="medium" sx={{ color: color }} />;
      break;
    case "email":
      iconComponent = <AlternateEmailOutlinedIcon fontSize="small" sx={{ color: color }} />;
      break;
    case "lock":
      iconComponent = <RemoveRedEyeOutlinedIcon fontSize="small" sx={{ color: color }} />;
      hasPasswordToggle = true;
      break;
    default:
      iconComponent = null;
  }

  const inputType = type === "password" && hasPasswordToggle ? 
    (showPassword ? "text" : "password") : type;

  return (
    <TextField
      id={id}
      label={label}
      type={inputType}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      error={!!error}
      helperText={error || helperText}
      fullWidth={fullWidth}
      variant="outlined"
      margin="normal"
      className={className}
      InputLabelProps={{
        sx: {
          color: '#E4E4E4',
          '&.Mui-focused': {
            color: '#E4E4E4'
          },
          '&.Mui-error': {
            color: '#E4E4E4'
          }
        }
      }}
      sx={{
        width: "full",
        "& .MuiInputLabel-root": {
          color: color,
          fontSize: "0.8rem",
        },
        "& .MuiInputBase-root": {
          height: 50,
          fontSize: "0.9rem",
          color: color,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            borderColor: "gray",
          },
          "&:hover fieldset": {
            borderColor: "#E4E4E4",
          },
          "&.Mui-focused fieldset": {
            borderColor: "secondary.main",
            borderWidth: 2,
          },
          "&.Mui-error fieldset": {
            borderColor: "#d32f2f",
          },
          "&.Mui-error:hover fieldset": {
            borderColor: "#d32f2f",
          }
        },
        input: {
          color: "#fff",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #0a0a2a inset",
            WebkitTextFillColor: "#ffffff",
            caretColor: "#ffffff",
            borderRadius: 0
          },
        },
        "& .MuiFormHelperText-root": {
          color: "#d32f2f",
          fontSize: "0.75rem",
          marginTop: "4px"
        },
        ...sx,
      }}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {hasPasswordToggle ? (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                className="!absolute !left-5 "
                sx={{ color: color }}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon fontSize="small" />
                ) : (
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
            ) : (
              iconComponent
            )}
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  );
};

export default UserPassField;