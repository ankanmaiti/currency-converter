
import SwapIcon from "@components/Icons/SwapIcon";
import Input from "@components/Elements/Input";
import Button from '@components/Elements/Button'

export default function Currencies() {
  return (
    <>
      <div className="flex" >
        <Input placeholder="From"/>
        <Button><SwapIcon/></Button>
        <Input placeholder="To"/>
      </div>
    </>
  )
}
