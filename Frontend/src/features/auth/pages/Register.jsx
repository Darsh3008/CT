import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Logo from '../assets/complain-tracker.svg'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const logoSrc = '/complain-tracker-logo.svg'

  const goToLogin = () => {
    window.history.pushState({Logo}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10">
      <section className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white/95 shadow-2xl ring-1 ring-white/20 backdrop-blur">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <aside className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 to-slate-900/70" />
            <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_35%_85%,rgba(255,255,255,0.10),transparent_60%)]" />

            <div className="relative h-full p-10 flex flex-col justify-between text-white">
              <div>
                <img src={Logo} alt="App logo" className="h-10 w-10 drop-shadow" />
                <h2 className="mt-6 text-2xl font-semibold tracking-tight">Complain Tracker</h2>
                <p className="mt-2 text-sm/6 text-white/80">
                  Create your account to start tracking and resolving complaints efficiently.
                </p>
              </div>

              <div className="text-xs text-white/70">
                Secure sign-up • Role-based access • Activity history
              </div>
            </div>
          </aside>

          <div className="p-7 sm:p-9 md:p-12">
            <header className="mb-8">
              <div className="flex items-center gap-3 md:hidden">
                <img src={Logo} alt="App logo" className="h-9 w-9" />
                <span className="text-sm font-semibold text-slate-800">Complain Tracker</span>
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">Create account</h1>
              <p className="mt-1 text-sm text-slate-600">Sign up to get started.</p>
            </header>

            <Form className="space-y-6">
              <Form.Group className="mb-0" controlId="formBasicName">
                <Form.Label className="block text-sm font-medium text-slate-700">Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  className="mt-1 h-11 w-full rounded-xl border-slate-200 bg-white px-3 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15"
                />
              </Form.Group>

              <Form.Group className="mb-0" controlId="formBasicEmail">
                <Form.Label className="block text-sm font-medium text-slate-700">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 h-11 w-full rounded-xl border-slate-200 bg-white px-3 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15"
                />
              </Form.Group>

              <Form.Group className="mb-0" controlId="formBasicPassword">
                <Form.Label className="mb-0 block text-sm font-medium text-slate-700">Password</Form.Label>
                <div className="relative mt-1">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="h-11 w-full rounded-xl border-slate-200 bg-white px-3 pr-16 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    aria-pressed={showPassword}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Use at least 8 characters with a mix of letters and numbers.
                </p>
              </Form.Group>

              <Form.Group className="mb-0" controlId="formBasicConfirmPassword">
                <Form.Label className="mb-0 block text-sm font-medium text-slate-700">Confirm password</Form.Label>
                <div className="relative mt-1">
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter password"
                    className="h-11 w-full rounded-xl border-slate-200 bg-white px-3 pr-16 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    aria-pressed={showConfirmPassword}
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-full rounded-xl py-2.5 font-semibold text-white shadow-sm transition hover:shadow-md active:scale-[0.99] bg-slate-950 border-0 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
              >
                Create account
              </Button>
            </Form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs font-medium text-slate-500">Already registered?</span>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={goToLogin}
                  className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900"
                >
                  Login
                </button>
              </p>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              By creating an account, you agree to our Terms &amp; Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
