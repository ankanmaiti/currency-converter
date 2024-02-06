import { useId } from "react";
import Input from "../Elements/Input";

export default function Conversion() {
  const id = useId()

  return (
    <div className="space-y-4 text-gray-700">
      <Input type="number" id={`${id}-actual`} label={'Actual Amount'} />
      <Input type="number" label={'Converted Amount'} id={`${id}-converted`} className={"cursor-not-allowed"} disabled />
    </div>
  )
}
