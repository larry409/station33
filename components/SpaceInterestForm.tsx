'use client'

import { useState } from 'react'
import type { SpaceConfig, SpaceField } from '@/lib/spaces'

/**
 * Interest-list form for the commercial space pages. Submits to Netlify Forms
 * using the same fetch-to-/__forms.html pattern as the contact and investor
 * forms — the form must be declared in `public/__forms.html` for Netlify's
 * build crawler to register it.
 */
export default function SpaceInterestForm({ config }: { config: SpaceConfig }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setErrorMessage('')

    // Encode all named fields (including form-name and the honeypot) for Netlify Forms
    const form = e.currentTarget
    const params = new URLSearchParams()
    new FormData(form).forEach((value, key) => params.append(key, value.toString()))

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (!res.ok) throw new Error(`Netlify Forms responded ${res.status}`)

      setSubmitMessage(config.successMessage)
      form.reset()
    } catch (err) {
      console.error(`${config.formName} submission failed:`, err)
      setErrorMessage(
        'Something went wrong sending your details. Please email info@station33.co or try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      name={config.formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={config.formName} />
      {/* Honeypot field — hidden from users, catches bots */}
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      <p className="text-sm text-body-text/80">
        Fields marked <span className="text-station-gold">*</span> are required.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {config.fields.map((field) => (
          <Field key={field.name} field={field} slug={config.slug} />
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[56px]"
      >
        {isSubmitting ? 'Sending…' : config.submitLabel}
      </button>

      {submitMessage && (
        <div
          className="p-4 bg-accent-teal/15 border border-accent-teal/60 rounded-2xl text-accent-teal text-center"
          role="status"
          aria-live="polite"
        >
          {submitMessage}
        </div>
      )}
      {errorMessage && (
        <div
          className="p-4 bg-station-red/15 border border-station-red/60 rounded-2xl text-station-red text-center"
          role="alert"
        >
          {errorMessage}
        </div>
      )}
    </form>
  )
}

/** Textareas span the full grid; everything else sits in one of the two columns. */
function Field({ field, slug }: { field: SpaceField; slug: string }) {
  const id = `${slug}-${field.name}`
  const required = field.type !== 'select' && field.type !== 'textarea' && field.required === true
  const describedBy = field.hint ? `${id}-hint` : undefined

  return (
    <div className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}>
      <label htmlFor={id} className="form-label text-sm md:text-base">
        {field.label}
        {required && <span className="text-station-gold"> *</span>}
      </label>

      {field.type === 'select' ? (
        /* `appearance-none` drops the native arrow, which renders unreadably
           dark on the card background — the span below replaces it. */
        <div className="relative">
          <select
            id={id}
            name={field.name}
            defaultValue=""
            aria-describedby={describedBy}
            className="form-input text-base md:text-lg appearance-none cursor-pointer pr-12"
          >
            <option value="">Select one</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-station-gold text-xs"
          >
            &#9660;
          </span>
        </div>
      ) : field.type === 'textarea' ? (
        <textarea
          id={id}
          name={field.name}
          rows={field.rows ?? 5}
          placeholder={field.placeholder}
          aria-describedby={describedBy}
          className="form-input resize-none text-base md:text-lg"
        />
      ) : (
        <input
          type={field.type}
          id={id}
          name={field.name}
          required={required}
          placeholder={field.placeholder}
          aria-describedby={describedBy}
          className="form-input text-base md:text-lg"
        />
      )}

      {field.hint && (
        <p id={describedBy} className="mt-2 text-sm text-body-text/80 leading-snug">
          {field.hint}
        </p>
      )}
    </div>
  )
}
