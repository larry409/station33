/**
 * Renders a JSON-LD structured data block.
 *
 * Angle brackets and ampersands are escaped as unicode sequences so that no
 * value can terminate the surrounding <script> element or open a comment.
 * JSON parsers read the escapes back as the original characters.
 */
const HTML_ESCAPES: Record<string, string> = {
  '<': '\\u003c',
  '>': '\\u003e',
  '&': '\\u0026',
}

export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[]
}) {
  const json = JSON.stringify(data).replace(/[<>&]/g, (char) => HTML_ESCAPES[char])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
