import React from "react";
import TextInput from '@/entities/global/atoms/Input/TextInput'

function SignupInput({
  valueUsername,
  valueEmail,
  valuePassword,
  onChangeUsername,
  onChangeEmail,
  onChangePassword,
  errorUsername,
  errorEmail,
  errorPassword,
  ...props
}) {
  const inputColor = "#E4E4E4";

  return (
    <div {...props}>
      <TextInput
        variantType="login"
        id="username"
        label="نام کاربری"
        value={valueUsername}
        onChange={onChangeUsername}
        error={!!errorUsername}
        helperText={errorUsername}
        color={inputColor}
        borderRadius='9px'
        icon="person"
      />

      <TextInput
        variantType="login"
        id="email"
        label="ایمیل"
        type="email"
        value={valueEmail}
        onChange={onChangeEmail}
        error={!!errorEmail}
        helperText={errorEmail}
        color={inputColor}
        borderRadius='9px'
        icon = "email"
      />

      <TextInput
        variantType="login"
        id="password"
        label="رمز عبور"
        type="password"
        value={valuePassword}
        onChange={onChangePassword}
        error={!!errorPassword}
        helperText={errorPassword}
        color={inputColor}
        borderRadius='9px'
        icon="lock"
      />
    </div>
  )
}

export default SignupInput;
