interface MarkedProps {
  /** Plain text where `==phrase==` is drawn with the highlighter. */
  text: string
}

export function Marked({ text }: MarkedProps) {
  const parts = text.split(/==(.+?)==/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="mark">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}
