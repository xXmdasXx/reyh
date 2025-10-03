'use client'
import React, { useState } from "react"
import GlassCard from "../../global/atoms/Card/GlassCard"
import SignupLabel from "../molecules/Labels/SignupLabel"
import SignupInput from "../molecules/FormFields/SignupInput"
import PrimaryButton from "@/entities/global/atoms/Button/PrimaryButton"
import CheckboxAtom from "@/entities/global/atoms/Checkbox/CheckboxAtom"
import DontHaveAccSignup from "@/entities/auth/molecules/DontHaveAcc/DontHaveAccSignup"
import { Alert } from "@mui/material"
import TypographyAtom from "@/entities/global/atoms/Typography/TypographyAtom"
import { api } from "@/lib/Axios"

function SignupFrameOrganism() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [errors, setErrors] = useState({ username: "", email: "", password: "" })
  const [alertMessage, setAlertMessage] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState<"error" | "success">("error")
  const [loading, setLoading] = useState(false)

  const handleAcceptTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked)
  }

  // تابع اعتبارسنجی ایمیل (باید @ داشته باشد و با .com تمام شود)
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.com$/i.test(email)

  // تابع اعتبارسنجی رمز عبور (حداقل 8 کاراکتر)
  const isValidPassword = (password: string) => password.length >= 8

  // تابع اعتبارسنجی نام کاربری (حداقل 3 کاراکتر، فقط حروف، عدد و _)
  const isValidUsername = (username: string) => /^[a-zA-Z0-9_.]+$/.test(username) && username.length >= 3

  // اعتبارسنجی کامل و همزمان ست کردن Alert و خطاها روی فیلدها
  const validateInputs = () => {
    const newErrors = { username: "", email: "", password: "" }
    let hasError = false
    let alertMsg = ""

    if (!username.trim()) {
      newErrors.username = "نام کاربری الزامی است"
      alertMsg = "نام کاربری الزامی است"
      hasError = true
    } else if (!isValidUsername(username.trim())) {
      newErrors.username = "نام کاربری باید حداقل ۳ کاراکتر باشد و فقط میتواند شامل حروف، عدد باشد"
      alertMsg = newErrors.username
      hasError = true
    }

    if (!email.trim()) {
      newErrors.email = "ایمیل الزامی است"
      if (!alertMsg) alertMsg = "ایمیل الزامی است"
      hasError = true
    } else if (!isValidEmail(email.trim())) {
      newErrors.email = "ایمیل باید معتبر باشد"
      if (!alertMsg) alertMsg = newErrors.email
      hasError = true
    }

    if (!password.trim()) {
      newErrors.password = "رمز عبور الزامی است"
      if (!alertMsg) alertMsg = "رمز عبور الزامی است"
      hasError = true
    } else if (!isValidPassword(password.trim())) {
      newErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد"
      if (!alertMsg) alertMsg = newErrors.password
      hasError = true
    }

    if (!acceptTerms) {
      if (!alertMsg) alertMsg = "لطفا قوانین را بپذیرید"
      hasError = true
    }

    setErrors(newErrors)

    if (hasError) {
      setAlertMessage(alertMsg)
      setAlertSeverity("error")
      setShowAlert(true)
    }

    return !hasError
  }

  const handleSignup = async () => {
    setShowAlert(false)
    setAlertMessage("")

    if (!validateInputs()) return

    setLoading(true)

    try {
      const signupData = {
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
        accept_terms: acceptTerms,
      }

      console.log("Sending signup data:", signupData)

      const response = await api.post("register", signupData)

      console.log("Signup success:", response.data)

      setAlertSeverity("success")
      setAlertMessage("ثبت نام با موفقیت انجام شد، لطفا وارد شوید")
      setShowAlert(true)

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    } catch (error: any) {
      console.error("Signup failed:", error.response?.data)

      setAlertSeverity("error")
      if (error.response?.data?.detail) {
        if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail.map((err: any) => err.msg).join(" - ")
          setAlertMessage(errorMessages)
        } else if (typeof error.response.data.detail === "string") {
          setAlertMessage(error.response.data.detail)
        } else {
          setAlertMessage("ثبت نام انجام نشد، لطفا دوباره تلاش کنید")
        }
      } else if (error.response?.data?.message) {
        setAlertMessage(error.response.data.message)
      } else if (error.message) {
        setAlertMessage("خطا در برقراری ارتباط با سرور")
      } else {
        setAlertMessage("خطای نامشخص رخ داده است")
      }

      setShowAlert(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <GlassCard
      height="650px"
      width="500px"
      className="!w-auto !max-w-[500px] mx-5 sm:!w-[500px] sm:!px-10"
    >
      <SignupLabel />

      <Alert
        severity={alertSeverity}
        className={`!bg-gray-500/20 !rounded-xl !mt-5 !text-white !transition-opacity !duration-200 ${
          showAlert ? '!visible !opacity-100' : '!invisible !opacity-0'
        }`}
      >
        {alertMessage || ' '}
      </Alert>

      <SignupInput
        className='!mt-3'
        valueUsername={username}
        valueEmail={email}
        valuePassword={password}
        onChangeUsername={(e: any) => {
          setUsername(e.target.value)
          if (errors.username) setErrors(prev => ({ ...prev, username: "" }))
        }}
        onChangeEmail={(e: any) => {
          setEmail(e.target.value)
          if (errors.email) setErrors(prev => ({ ...prev, email: "" }))
        }}
        onChangePassword={(e: any) => {
          setPassword(e.target.value)
          if (errors.password) setErrors(prev => ({ ...prev, password: "" }))
        }}
        errorUsername={errors.username}
        errorEmail={errors.email}
        errorPassword={errors.password}
      />

      <CheckboxAtom
        id="acceptTerms"
        checked={acceptTerms}
        onChange={handleAcceptTermsChange}
        label={
          <TypographyAtom variant="body2" sx={{ color: "#E4E4E4" }}>
            قوانین را می‌پذیرم
          </TypographyAtom>
        }
        className=""
        sx={{}}
      />

      <PrimaryButton onClick={handleSignup} disabled={loading}>
        {loading ? "در حال ثبت نام..." : "ثبت نام"}
      </PrimaryButton>

      <DontHaveAccSignup
        href="/login"
        text="حساب کاربری دارید؟"
        linkText="ورود"
        className="mt-8 custom-class"
      />
    </GlassCard>
  )
}

export default SignupFrameOrganism
