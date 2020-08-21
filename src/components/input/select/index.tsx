import React, { useState, useEffect } from "react"
import { Dropdown, Message, Input, Field, Label } from "styles"
import { IoMdCloseCircle } from "react-icons/io"
import { Col } from "react-grid-system"
import * as availableRules from "rules"
import { utilService } from "services"
import { useField } from "hooks"
import _ from "lodash"

interface DataItem {
  value: any
  label: string
}

interface Props {
  name: string
  source: DataItem[]
  [x: string]: any
}

function Select({ name, label, source, ...rest }: Props) {
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [errors, setErrors] = useState<String[] | null>(null)

  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null)
  const [dataSource, setDataSource] = useState<DataItem[]>(source)
  const [querystring, setQuerystring] = useState<string>("")
  const [touched, setTouched] = useState(false)

  const [focus, setFocus] = useState<boolean>(false)
  const className: string = utilService.parseClassName({
    focus,
    touched,
    errors,
  })

  const { onChange, validate, value } = useField(name, rules)

  useEffect(() => {
    if (!_.isEqual(dataSource, source)) {
      setDataSource(source)
      setSelectedItem(null)
      return
    }
    setDataSource(source)
  }, [source])

  useEffect(() => {
    if (!value) return

    // Check if the item is correct
    const item = dataSource.find((item) => item.value === value)
    if (item?.value !== selectedItem?.value) {
      handleItemSelection(item as DataItem, false)()
    }
  }, [value])

  function handleItemSelection(item: DataItem, isTouched: boolean) {
    return function () {
      if (item.value === selectedItem?.value) return

      // Set actived item
      setSelectedItem(item)
      onChange(item.value)
      setErrors(validate())
      setTouched(isTouched)
    }
  }

  function handleClearSelection() {
    setSelectedItem(null)
    onChange(null)
    setErrors(validate())
    setTouched(true)
  }

  function handleInputChange(e: any) {
    setQuerystring(e.target.value)
  }

  function getInputValue() {
    if (focus) {
      return querystring
    }
    return selectedItem?.label || ""
  }

  function handleFocus() {
    setFocus(true)
  }

  function handleBlur() {
    setFocus(false)
  }

  return (
    <Col xs={12} {...sizes}>
      <Field className={className}>
        {label && <Label className={className}>{label}</Label>}
        <Input
          value={getInputValue()}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={className}
        />
        {selectedItem && (
          <div className="std__append_right">
            <IoMdCloseCircle onClick={handleClearSelection} />
          </div>
        )}
        <Dropdown className={className}>
          {dataSource
            .filter((item) => utilService.matches(querystring, item.label))
            .map((item) => (
              <li
                key={item.value}
                onMouseDown={handleItemSelection(item, true)}
              >
                {item.label}
              </li>
            ))}
        </Dropdown>
      </Field>
      {errors?.map((error, key) => (
        <Message className={className} key={key}>
          {error}
        </Message>
      ))}
    </Col>
  )
}

export default Select
