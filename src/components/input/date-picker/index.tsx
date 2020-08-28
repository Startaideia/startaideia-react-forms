import React from "react"
import Text from "../text"
import Mask from "string-mask"
import moment from "moment"

function DatePicker({
  maxLength = 10,
  mask = "##/##/####",
  inputFormat = "YYYY/MM/DD",
  maskFormat = "DD/MM/YYYY",
  isAge,
  ...props
}: any) {
  /**
   * Apply value mask
   *
   */
  function transformValue(value: string) {
    const date = value.replace(/[^\d\p{L}]/g, "")

    if (date.length >= maxLength - 2) {
      return moment(date, inputFormat).format(maskFormat)
    }

    return Mask.apply(date, mask)
  }

  /**
   * Apply input mask
   *
   */
  function onInput(value: string) {
    const date = value.replace(/[^\d\p{L}]/g, "")

    if (date.length >= maxLength - 2) {
      return moment(date, maskFormat).format(inputFormat)
    }

    return value
  }

  return (
    <Text
      isDate={inputFormat}
      maxLength={maxLength}
      transformValue={transformValue}
      onInput={onInput}
      inputmode="numeric"
      isAge={isAge ? { ...isAge, format: inputFormat } : false}
      {...props}
    />
  )
}

export default DatePicker
