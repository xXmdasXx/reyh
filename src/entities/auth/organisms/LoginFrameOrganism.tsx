'use client'
import React, { useState, useEffect } from 'react'
import GlassCard from '../../global/atoms/Card/GlassCard'
import LoginLabels from '../molecules/Labels/LoginLabels'
import LoginInputs from '../molecules/FormFields/LoginInputs'
import PrimaryButton from '@/entities/global/atoms/Button/PrimaryButton'
import CheckboxAtom from '@/entities/global/atoms/Checkbox/CheckboxAtom'
import DontHaveAccLogin from '@/entities/auth/molecules/DontHaveAcc/DontHaveAccLogin'
import { Alert } from '@mui/material'
import { api } from '@/lib/Axios'

export default function LoginFrameOrganism() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'error' | 'success'>('error')
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked)
  }

  // ✅ اعتبارسنجی ساده فقط برای خالی بودن
  const validateInputs = () => {
    let message = ''
    const newErrors: { username?: string; password?: string } = {}

    if (!username.trim() && !password.trim()) {
      message = 'نام کاربری و رمز عبور را وارد کنید'
      newErrors.username = 'نام کاربری الزامی است'
      newErrors.password = 'رمز عبور الزامی است'
    } else if (!username.trim()) {
      message = 'نام کاربری را وارد کنید'
      newErrors.username = 'نام کاربری الزامی است'
    } else if (!password.trim()) {
      message = 'رمز عبور را وارد کنید'
      newErrors.password = 'رمز عبور الزامی است'
    }

    if (message) {
      setErrors(newErrors)
      setAlertMessage(message)
      setAlertType('error')
      setShowAlert(true)
      return false
    }

    setErrors({})
    return true
  }

  const handleLogin = async () => {
    setShowAlert(false)
    setAlertMessage('')

    // ✅ اعتبارسنجی
    if (!validateInputs()) {
      return
    }

    setLoading(true)

    try {
      const loginData = {
        username: username.trim(),
        password: password.trim(),
      }

      const response = await api.post('login', loginData)

      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        setAlertMessage('ورود با موفقیت انجام شد، در حال انتقال...')
        setAlertType('success') // ✅ تغییر به success
        setShowAlert(true)

        setTimeout(() => {
          window.location.href = '/account'
        }, 1500)
      } else {
        setAlertMessage('ورود انجام شد اما توکن دریافت نشد')
        setAlertType('error')
        setShowAlert(true)
      }
    } catch (error: any) {
      console.error('Login failed:', error.response?.data)
      setAlertType('error') // خطا = ارور

      if (error.response?.data?.detail) {
        if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail
            .map((err: any) => err.msg)
            .join(' - ')
          setAlertMessage(errorMessages)
        } else if (typeof error.response.data.detail === 'string') {
          setAlertMessage(error.response.data.detail)
        } else {
          setAlertMessage('نام کاربری یا رمز عبور اشتباه است')
        }
      } else if (error.response?.data?.message) {
        setAlertMessage(error.response.data.message)
      } else if (error.response?.status === 401) {
        setAlertMessage('نام کاربری یا رمز عبور اشتباه است')
      } else if (error.message) {
        setAlertMessage('خطا در برقراری ارتباط با سرور')
      } else {
        setAlertMessage('خطای نامشخص رخ داده است')
      }

      setShowAlert(true)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !loading) {
      handleLogin()
    }
  }

  if (!mounted) return null

  return (
    <GlassCard
      width="500px"
      className="!w-auto !max-w-[500px] mx-5 sm:!h-[530px] md:!h-[550px] sm:!w-[500px] "
    >
      <LoginLabels />

      <Alert
        severity={alertType}
        className={`!rounded-xl mt-5 !transition-opacity !duration-200 ${
          showAlert ? '!visible !opacity-100' : '!invisible !opacity-0'
        } ${alertType === 'error' ? '!bg-gray-500/20 !text-white' : '!bg-gray-500/20 !text-white'}`}
      >
        {alertMessage || ' '}
      </Alert>

      <LoginInputs
        valueUsername={username}
        valuePassword={password}
        onChangeUsername={(e: any) => setUsername(e.target.value)}
        onChangePassword={(e: any) => setPassword(e.target.value)}
        errorUsername={errors.username}
        errorPassword={errors.password}
      />

      <CheckboxAtom
        id="RememberMe"
        label="مرا به خاطر بسپار"
        checked={rememberMe}
        onChange={handleRememberMeChange}
        className={''}
        sx={{}}
      />

      <PrimaryButton onClick={handleLogin} className='!mt-3 !text-[1rem] !py-5'>ورود</PrimaryButton>

      <DontHaveAccLogin
        href="/register"
        text="حساب کاربری ندارید؟"
        linkText="ثبت نام"
        className="mt-7 custom-class"
      />
    </GlassCard>
  )
}
