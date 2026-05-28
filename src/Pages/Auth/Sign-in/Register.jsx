import React, { useState } from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/BlackFooter'
import { Link } from 'react-router-dom'

import Dash from '../../../Components/Home/Dashboard'

// ─── Helpers ───────────────────────────────────────────────
const EyeIcon = ({ visible }) => (
  visible ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
)

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" style={{ marginRight: '10px', flexShrink: 0 }}>
    <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.3 33.1 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l6-6C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" />
    <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.8 1.1 8 2.9l6-6C34.5 6.5 29.6 4 24 4c-7.7 0-14.3 4.4-17.7 10.7z" />
    <path fill="#FBBC05" d="M24 44c5.5 0 10.5-1.9 14.4-5l-6.7-5.5C29.7 35.3 27 36 24 36c-5.6 0-10.3-3.8-11.9-9l-7 5.4C8.8 40.1 15.9 44 24 44z" />
    <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.2-2.3 4.2-4.3 5.5l6.7 5.5C42 35.8 44.5 30.3 44.5 24c0-1.3-.1-2.7-.2-4z" />
  </svg>
)

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" style={{ marginRight: '10px', flexShrink: 0 }}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const SocialButtons = ({ label }) => (
  <>
    <button
      style={s.socialBtn}
      onClick={() => window.open('https://accounts.google.com', '_blank')}
    >
      <GoogleIcon /> {label} with Google
    </button>
    <button style={{ ...s.socialBtn, marginTop: '10px' }}>
      <AppleIcon /> {label} with Apple
    </button>
  </>
)

const Divider = () => (
  <div style={s.divider}>
    <span style={s.dividerLine} />
    <span style={s.dividerText}>or</span>
    <span style={s.dividerLine} />
  </div>
)

const SuccessBanner = ({ msg }) => (
  <div style={s.successBanner}>✓ {msg}</div>
)

// ─── Field component ────────────────────────────────────────
const Field = ({ label, type = 'text', value, onChange, onBlur, touched, error, placeholder = '', rightSlot }) => {
  const borderColor = touched && error ? '#e53e3e' : touched && !error ? '#38a169' : '#dce3eb'
  return (
    <div style={s.fieldGroup}>
      <label style={s.label}>{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={{ ...s.input, borderColor, paddingRight: rightSlot ? '40px' : '12px' }}
        />
        {rightSlot}
        {touched && !error && !rightSlot && (
          <span style={s.checkIcon}>✓</span>
        )}
        {touched && !error && rightSlot && (
          <span style={{ ...s.checkIcon, right: '38px' }}>✓</span>
        )}
      </div>
      {touched && error && <p style={s.errorMsg}>⚠ {error}</p>}
    </div>
  )
}

// ─── SIGN IN ────────────────────────────────────────────────
const validateSignIn = (email, password) => {
  const e = {}
  if (!email.trim()) e.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.'
  if (!password) e.password = 'Password is required.'
  else if (password.length < 8) e.password = 'Must be at least 8 characters.'
  else if (!/[A-Z]/.test(password)) e.password = 'Must contain at least one uppercase letter.'
  else if (!/[0-9]/.test(password)) e.password = 'Must contain at least one number.'
  return e
}

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [success, setSuccess] = useState(false)

  const touch = (field) => {
    const t = { ...touched, [field]: true }
    setTouched(t)
    setErrors(validateSignIn(email, password))
  }

  const handleSubmit = () => {
    setTouched({ email: true, password: true })
    const errs = validateSignIn(email, password)
    setErrors(errs)
    if (!Object.keys(errs).length) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  return (
    <div style={s.form}>
      {success && <SuccessBanner msg="Signed in successfully!" />}

      <Field
        label="Email Address"
        type="email"
        value={email}
        onChange={e => { setEmail(e.target.value); if (touched.email) setErrors(validateSignIn(e.target.value, password)) }}
        onBlur={() => touch('email')}
        touched={touched.email}
        error={errors.email}
      />

      <div style={s.fieldGroup}>
        <div style={s.pwLabelRow}>
          <label style={s.label}>Password</label>
          <Link to="/forgot-password" style={s.forgotLink}>
            Forget Password
          </Link>

          <Link to="/reset" style={s.forgotLink}>
            Reset password
          </Link>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={e => { setPassword(e.target.value); if (touched.password) setErrors(validateSignIn(email, e.target.value)) }}
            onBlur={() => touch('password')}
            style={{ ...s.input, borderColor: touched.password && errors.password ? '#e53e3e' : touched.password && !errors.password ? '#38a169' : '#dce3eb', paddingRight: '40px' }}
          />
          <button type="button" onClick={() => setShowPw(!showPw)} style={s.eyeBtn}>
            <EyeIcon visible={showPw} />
          </button>
          {touched.password && !errors.password && <span style={{ ...s.checkIcon, right: '38px' }}>✓</span>}
        </div>
        {touched.password && errors.password && <p style={s.errorMsg}>⚠ {errors.password}</p>}
        {password.length > 0 && (
          <div style={s.hintRow}>
            <span style={{ ...s.hint, color: password.length >= 8 ? '#38a169' : '#aaa' }}>● 8+ chars</span>
            <span style={{ ...s.hint, color: /[A-Z]/.test(password) ? '#38a169' : '#aaa' }}>● Uppercase</span>
            <span style={{ ...s.hint, color: /[0-9]/.test(password) ? '#38a169' : '#aaa' }}>● Number</span>
          </div>
        )}
      </div>

      <button onClick={handleSubmit} style={s.mainBtn}>SIGN IN &nbsp;→</button>
      <Divider />
      <SocialButtons label="Login" />
    </div>
  )
}

// ─── SIGN UP ────────────────────────────────────────────────
const validateSignUp = (name, email, password, confirm, agreed) => {
  const e = {}
  if (!name.trim()) e.name = 'Name is required.'
  else if (name.trim().length < 2) e.name = 'Name must be at least 2 characters.'

  if (!email.trim()) e.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.'

  if (!password) e.password = 'Password is required.'
  else if (password.length < 8) e.password = 'Must be at least 8 characters.'
  else if (!/[A-Z]/.test(password)) e.password = 'Must contain at least one uppercase letter.'
  else if (!/[0-9]/.test(password)) e.password = 'Must contain at least one number.'

  if (!confirm) e.confirm = 'Please confirm your password.'
  else if (confirm !== password) e.confirm = 'Passwords do not match.'

  if (!agreed) e.agreed = 'You must agree to the Terms & Privacy Policy.'
  return e
}

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(true)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [success, setSuccess] = useState(false)

  const revalidate = (overrides = {}) => {
    const vals = { name, email, password, confirm, agreed, ...overrides }
    return validateSignUp(vals.name, vals.email, vals.password, vals.confirm, vals.agreed)
  }

  const touch = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    setErrors(revalidate())
  }

  const handleSubmit = () => {
    setTouched({ name: true, email: true, password: true, confirm: true, agreed: true })
    const errs = revalidate()
    setErrors(errs)
    if (!Object.keys(errs).length) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  const inputBorder = (field) =>
    touched[field] && errors[field] ? '#e53e3e' : touched[field] && !errors[field] ? '#38a169' : '#dce3eb'

  return (
    <div style={s.form}>
      {success && <SuccessBanner msg="Account created successfully!" />}

      {/* Name */}
      <div style={s.fieldGroup}>
        <label style={s.label}>Name</label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={name}
            onChange={e => { setName(e.target.value); if (touched.name) setErrors(revalidate({ name: e.target.value })) }}
            onBlur={() => touch('name')}
            style={{ ...s.input, borderColor: inputBorder('name') }}
          />
          {touched.name && !errors.name && <span style={s.checkIcon}>✓</span>}
        </div>
        {touched.name && errors.name && <p style={s.errorMsg}>⚠ {errors.name}</p>}
      </div>

      {/* Email */}
      <div style={s.fieldGroup}>
        <label style={s.label}>Email Address</label>
        <div style={{ position: 'relative' }}>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); if (touched.email) setErrors(revalidate({ email: e.target.value })) }}
            onBlur={() => touch('email')}
            style={{ ...s.input, borderColor: inputBorder('email') }}
          />
          {touched.email && !errors.email && <span style={s.checkIcon}>✓</span>}
        </div>
        {touched.email && errors.email && <p style={s.errorMsg}>⚠ {errors.email}</p>}
      </div>

      {/* Password */}
      <div style={s.fieldGroup}>
        <label style={s.label}>Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={e => { setPassword(e.target.value); if (touched.password) setErrors(revalidate({ password: e.target.value })) }}
            onBlur={() => touch('password')}
            placeholder="8+ characters"
            style={{ ...s.input, borderColor: inputBorder('password'), paddingRight: '40px' }}
          />
          <button type="button" onClick={() => setShowPw(!showPw)} style={s.eyeBtn}>
            <EyeIcon visible={showPw} />
          </button>
          {touched.password && !errors.password && <span style={{ ...s.checkIcon, right: '38px' }}>✓</span>}
        </div>
        {touched.password && errors.password && <p style={s.errorMsg}>⚠ {errors.password}</p>}
        {password.length > 0 && (
          <div style={s.hintRow}>
            <span style={{ ...s.hint, color: password.length >= 8 ? '#38a169' : '#aaa' }}>● 8+ chars</span>
            <span style={{ ...s.hint, color: /[A-Z]/.test(password) ? '#38a169' : '#aaa' }}>● Uppercase</span>
            <span style={{ ...s.hint, color: /[0-9]/.test(password) ? '#38a169' : '#aaa' }}>● Number</span>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div style={s.fieldGroup}>
        <label style={s.label}>Confirm Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showConfirm ? 'text' : 'password'}
            value={confirm}
            onChange={e => { setConfirm(e.target.value); if (touched.confirm) setErrors(revalidate({ confirm: e.target.value })) }}
            onBlur={() => touch('confirm')}
            style={{ ...s.input, borderColor: inputBorder('confirm'), paddingRight: '40px' }}
          />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={s.eyeBtn}>
            <EyeIcon visible={showConfirm} />
          </button>
          {touched.confirm && !errors.confirm && <span style={{ ...s.checkIcon, right: '38px' }}>✓</span>}
        </div>
        {touched.confirm && errors.confirm && <p style={s.errorMsg}>⚠ {errors.confirm}</p>}
      </div>

      {/* Terms checkbox */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={e => { setAgreed(e.target.checked); setErrors(revalidate({ agreed: e.target.checked })) }}
          style={{ marginTop: '3px', accentColor: '#f58220', width: '15px', height: '15px', flexShrink: 0, cursor: 'pointer' }}
        />
        <span style={{ fontSize: '12.5px', color: '#555', lineHeight: '1.5' }}>
          Are you agree to Clicon{' '}
          <a href="#" style={s.termLink}>Terms of Condition</a>
          {' '}and{' '}
          <a href="#" style={s.termLink}>Privacy Policy.</a>
        </span>
      </div>
      {touched.agreed && errors.agreed && <p style={{ ...s.errorMsg, marginTop: '-10px', marginBottom: '10px' }}>⚠ {errors.agreed}</p>}

      <button onClick={handleSubmit} style={s.mainBtn}>SIGN UP &nbsp;→</button>
      <Divider />
      <SocialButtons label="Sign up" />
    </div>
  )
}

// ─── ROOT COMPONENT ─────────────────────────────────────────
const SignIn = () => {
  const [activeTab, setActiveTab] = useState('signin')

  return (
    <>
      <Navbar />
      <div style={s.wrapper}>
        <div style={s.card}>
          {/* Tab Row */}
          <div style={s.tabRow}>
            {['signin', 'signup'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ ...s.tab, ...(activeTab === tab ? s.tabActive : s.tabInactive) }}
              >
                {tab === 'signin' ? 'Sign In' : 'Sign Up'}
                {activeTab === tab && <span style={s.tabUnderline} />}
              </button>
            ))}
          </div>

          {/* Render active form */}
          {activeTab === 'signin' ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignIn

// ─── STYLES ─────────────────────────────────────────────────
const s = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fa',
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  card: {
    width: '500px',          // Card width
    maxWidth: '90%',         // Responsive for mobile
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px 0 35px 0', // Inner spacing
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  tabRow: {
    display: 'flex',
    borderBottom: '1px solid #e8edf2',
    marginBottom: '20px',
  },
  tab: {
    flex: 1,
    padding: '16px 0 14px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    position: 'relative',
    outline: 'none',
    letterSpacing: '0.01em',
  },
  tabActive: { color: '#1a1a1a' },
  tabInactive: { color: '#999' },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: '18%',
    right: '18%',
    height: '2.5px',
    borderRadius: '2px',
    backgroundColor: '#f58220',
    display: 'block',
  },
  successBanner: {
    marginBottom: '16px',
    padding: '10px 14px',
    backgroundColor: '#f0fff4',
    border: '1px solid #9ae6b4',
    borderRadius: '6px',
    color: '#276749',
    fontSize: '13px',
    fontWeight: '500',
  },
  form: { padding: '0 40px' },
  fieldGroup: { marginBottom: '14px' },
  label: { display: 'block', fontSize: '13px', color: '#444', marginBottom: '5px', fontWeight: '400' },
  input: {
    width: '100%',
    padding: '14px 14px',
    border: '1.5px solid #dce3eb',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#222',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    transition: 'border-color 0.2s',
  },
  checkIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#38a169',
    fontSize: '14px',
    fontWeight: '700',
    pointerEvents: 'none',
  },
  errorMsg: { margin: '4px 0 0 0', fontSize: '12px', color: '#e53e3e' },
  pwLabelRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' },
  forgotLink: { fontSize: '12.5px', color: '#f58220', textDecoration: 'none' },
  eyeBtn: { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' },
  hintRow: { display: 'flex', gap: '12px', marginTop: '5px' },
  hint: { fontSize: '11.5px', transition: 'color 0.2s' },
  mainBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#f58220',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    marginTop: '6px',
    marginBottom: '16px',
    transition: 'background-color 0.2s',
  },
  divider: { display: 'flex', alignItems: 'center', marginBottom: '14px' },
  dividerLine: { flex: 1, height: '1px', backgroundColor: '#e2e8f0' },
  dividerText: { margin: '0 12px', fontSize: '12px', color: '#aaa' },
  socialBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '11px 16px',
    border: '1.5px solid #dce3eb',
    borderRadius: '6px',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    boxSizing: 'border-box',
    transition: 'background 0.15s',
  },
  termLink: { color: '#3182ce', textDecoration: 'none', fontWeight: '500' },
}
