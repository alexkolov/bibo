type Props = {
  type: string
}

export default function Widget({ type }: Props) {
  return (
    <div>
      <h1>Widget { type }</h1>
    </div>
  )
}
