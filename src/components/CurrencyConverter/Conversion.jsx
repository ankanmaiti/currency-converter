import Input from "@components/Elements/Input";

export default function Conversion() {

  return (
    <div className="space-y-4 text-gray-700">
      <Input type="number" label='Actual Amount' />
      <Input type="number" label='Converted Amount' className="cursor-not-allowed" disabled />
    </div>
  )
}
