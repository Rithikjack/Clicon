import { useState } from "react"
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Black_Footer_2'

const EyeIcon = ({ visible }) =>
  visible ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )

const validate = (password, confirm) => {
  const e = {}
  if (!password) e.password = "Password is required."
  else if (password.length < 8) e.password = "Must be at least 8 characters."
  else if (!/[A-Z]/.test(password)) e.password = "Must include at least one uppercase letter."
  else if (!/[0-9]/.test(password)) e.password = "Must include at least one number."

  if (!confirm) e.confirm = "Please confirm your password."
  else if (confirm !== password) e.confirm = "Passwords do not match."
  return e
}

export default function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [success, setSuccess] = useState(false)

  const revalidate = (overrides = {}) => {
    const vals = { password, confirm, ...overrides }
    return validate(vals.password, vals.confirm)
  }

  const touch = (field, overrides = {}) => {
    setTouched(p => ({ ...p, [field]: true }))
    setErrors(revalidate(overrides))
  }

  const handleSubmit = () => {
    setTouched({ password: true, confirm: true })
    const errs = revalidate()
    setErrors(errs)
    if (!Object.keys(errs).length) {
      setSuccess(true)
      setPassword("")
      setConfirm("")
      setTouched({})
      setTimeout(() => setSuccess(false), 3500)
    }
  }

  const borderColor = (field) =>
    touched[field] && errors[field]
      ? "#e53e3e"
      : touched[field] && !errors[field]
      ? "#38a169"
      : "#dde3eb"

  return (
    <>
    <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f4f6f8;
          min-height: 100vh;
        }

        .rp-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          background: #f4f6f8;
        }

        .rp-card {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10);
          padding: 44px 40px 40px;
          width: 100%;
          max-width: 480px;
        }

        .rp-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .rp-subtitle {
          font-size: 13.5px;
          color: #888;
          text-align: center;
          line-height: 1.65;
          margin-bottom: 28px;
          padding: 0 8px;
        }

        .rp-field { margin-bottom: 18px; }

        .rp-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #444;
          margin-bottom: 6px;
        }

        .rp-input-wrap { position: relative; }

        .rp-input {
          width: 100%;
          padding: 11px 42px 11px 14px;
          border: 1.5px solid #dde3eb;
          border-radius: 7px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #222;
          background: #fff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .rp-input:focus {
          border-color: #f58220;
          box-shadow: 0 0 0 3px rgba(245,130,32,0.10);
        }

        .rp-input::placeholder { color: #bbb; font-size: 13px; }

        .rp-eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          line-height: 1;
        }

        .rp-check {
          position: absolute;
          right: 36px;
          top: 50%;
          transform: translateY(-50%);
          color: #38a169;
          font-size: 14px;
          font-weight: 700;
          pointer-events: none;
        }

        .rp-error {
          margin-top: 5px;
          font-size: 12px;
          color: #e53e3e;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .rp-hints {
          display: flex;
          gap: 14px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .rp-hint { font-size: 11.5px; transition: color 0.2s; }

        .rp-btn {
          width: 100%;
          padding: 14px;
          background: #f58220;
          color: #fff;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.08em;
          cursor: pointer;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.18s, transform 0.12s;
        }

        .rp-btn:hover { background: #e07318; }
        .rp-btn:active { transform: scale(0.985); }

        .rp-success {
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          border-radius: 7px;
          color: #276749;
          font-size: 13px;
          font-weight: 500;
          padding: 11px 14px;
          margin-bottom: 18px;
          text-align: center;
        }

        @media (max-width: 520px) {
          .rp-card {
            padding: 32px 20px 28px;
          }
          .rp-title { font-size: 19px; }
        }
      `}</style>

      <div className="rp-wrapper">
        <div className="rp-card">
          <h1 className="rp-title">Reset Password</h1>
          <p className="rp-subtitle">
            Duis sagittis molestie tellus, at eleifend sapien pellque quis.
            Fusce lorem nunc, fringilla sit amet nunc.
          </p>

          {success && (
            <div className="rp-success">✓ Password reset successfully!</div>
          )}

          {/* Password */}
          <div className="rp-field">
            <label className="rp-label">Password</label>
            <div className="rp-input-wrap">
              <input
                className="rp-input"
                type={showPw ? "text" : "password"}
                value={password}
                placeholder="8+ characters"
                style={{ borderColor: borderColor("password") }}
                onChange={e => {
                  setPassword(e.target.value)
                  if (touched.password) setErrors(revalidate({ password: e.target.value }))
                }}
                onBlur={() => touch("password")}
              />
              {touched.password && !errors.password && (
                <span className="rp-check">✓</span>
              )}
              <button className="rp-eye" type="button" onClick={() => setShowPw(!showPw)}>
                <EyeIcon visible={showPw} />
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="rp-error">⚠ {errors.password}</p>
            )}
            {password.length > 0 && (
              <div className="rp-hints">
                <span className="rp-hint" style={{ color: password.length >= 8 ? "#38a169" : "#bbb" }}>● 8+ chars</span>
                <span className="rp-hint" style={{ color: /[A-Z]/.test(password) ? "#38a169" : "#bbb" }}>● Uppercase</span>
                <span className="rp-hint" style={{ color: /[0-9]/.test(password) ? "#38a169" : "#bbb" }}>● Number</span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="rp-field">
            <label className="rp-label">Confirm Password</label>
            <div className="rp-input-wrap">
              <input
                className="rp-input"
                type={showConfirm ? "text" : "password"}
                value={confirm}
                style={{ borderColor: borderColor("confirm") }}
                onChange={e => {
                  setConfirm(e.target.value)
                  if (touched.confirm) setErrors(revalidate({ confirm: e.target.value }))
                }}
                onBlur={() => touch("confirm")}
              />
              {touched.confirm && !errors.confirm && (
                <span className="rp-check">✓</span>
              )}
              <button className="rp-eye" type="button" onClick={() => setShowConfirm(!showConfirm)}>
                <EyeIcon visible={showConfirm} />
              </button>
            </div>
            {touched.confirm && errors.confirm && (
              <p className="rp-error">⚠ {errors.confirm}</p>
            )}
          </div>

          {/* Submit */}
          <button className="rp-btn" onClick={handleSubmit}>
            RESET PASSWORD
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
