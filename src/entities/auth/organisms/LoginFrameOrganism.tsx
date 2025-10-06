'use client'
import React, { useState, useEffect } from 'react'
import GlassCard from '../../global/atoms/Card/GlassCard'
import LoginLabels from '../molecules/Labels/LoginLabels'
import LoginInputs from '../molecules/FormFields/LoginInputs'
import PrimaryButton from '@/entities/global/atoms/Button/PrimaryButton'
import CheckboxAtom from '@/entities/global/atoms/Checkbox/CheckboxAtom'
import DontHaveAccLogin from '@/entities/auth/molecules/DontHaveAcc/DontHaveAccLogin'
import SnackbarAtom from '@/entities/global/atoms/Snackbar/SnackbarAtom'
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
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success'>('error')
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked)
  }

  // ولیدیشن داخلی - فقط چک می‌کند که فیلدها خالی نباشند
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
      setSnackbarMessage(message)
      setSnackbarSeverity('error')
      setShowSnackbar(true)
      return false
    }

    setErrors({})
    return true
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  const handleLogin = async () => {
    setShowSnackbar(false)
    setSnackbarMessage('')

    // ولیدیشن داخلی
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

        setSnackbarMessage('ورود با موفقیت انجام شد، در حال انتقال...')
        setSnackbarSeverity('success')
        setShowSnackbar(true)

        setTimeout(() => {
          window.location.href = '/account'
        }, 1500)
      } else {
        setSnackbarMessage('ورود انجام شد اما توکن دریافت نشد')
        setSnackbarSeverity('error')
        setShowSnackbar(true)
      }
    } catch (error: any) {
      console.error('Login failed:', error.response?.data)
      setSnackbarSeverity('error')

      // پیام خطا از بک‌اند - دست نمی‌زنیم
      if (error.response?.data?.detail) {
        if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail
            .map((err: any) => err.msg)
            .join(' - ')
          setSnackbarMessage(errorMessages)
        } else if (typeof error.response.data.detail === 'string') {
          setSnackbarMessage(error.response.data.detail)
        } else {
          setSnackbarMessage('نام کاربری یا رمز عبور اشتباه است')
        }
      } else if (error.response?.data?.message) {
        setSnackbarMessage(error.response.data.message)
      } else if (error.response?.status === 401) {
        setSnackbarMessage('نام کاربری یا رمز عبور اشتباه است')
      } else if (error.message) {
        setSnackbarMessage('خطا در برقراری ارتباط با سرور')
      } else {
        setSnackbarMessage('خطای نامشخص رخ داده است')
      }

      setShowSnackbar(true)
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
    <>
      <GlassCard
        
        width="500px"
        className="!w-auto !max-w-[500px] mx-5 sm:!h-[530px] md:!h-[490px] sm:!w-[500px]"
      >
        <LoginLabels />

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

        <PrimaryButton onClick={handleLogin} className='!mt-3 !text-[1rem] !py-5'>
          {loading ? 'در حال ورود...' : 'ورود'}
        </PrimaryButton>

        <DontHaveAccLogin
          href="/register"
          text="حساب کاربری ندارید؟"
          linkText="ثبت نام"
          className="mt-7 custom-class"
        />
      </GlassCard>

      <SnackbarAtom
        open={showSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  )
}