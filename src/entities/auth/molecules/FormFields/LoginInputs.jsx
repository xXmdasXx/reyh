import React from 'react'
import UserPassField from '../../../global/atoms/Input/TextInput'

function LoginInputs({
  valueUsername,
  valuePassword,
  onChangeUsername,
  onChangePassword,
  errorUsername,
  errorPassword,
  ...props
}) {
  return (
    <div {...props}>
      <UserPassField
        variantType="login"
        label="نام کاربری"
        id="Username"
        value={valueUsername}
        onChange={onChangeUsername}
        error={!!errorUsername}
        helperText={errorUsername}
        icon="person"
        sx={{
          mt: 2.5
        }}
      />

      <UserPassField
        variantType="login"
        label="رمز عبور"
        id="Password"
        type="password"
        value={valuePassword}
        onChange={onChangePassword}
        error={!!errorPassword}
        helperText={errorPassword}
        sx={{ mt: 2 }}
        icon="lock"
      />
    </div>
  )
}

export default LoginInputs
