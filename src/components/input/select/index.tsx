import React, { useState, useEffect, useRef } from "react"
import { Dropdown, Message, Input, Field, Label } from "styles"
import { IoMdCloseCircle } from "react-icons/io"
import { BsChevronDown } from "react-icons/bs"
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
/**
 * Select Input Component
 *
 * @param {Props} { name, label, source, ...rest }
 * @returns
 */
function Select({
  name,
  label,
  source,
  capitalize,
  defaultValue = null,
  ...rest
}: Props) {
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [errors, setErrors] = useState<String[] | null>(null)

  const [selectedItem, setSelectedItem] = useState<DataItem | null>(
    defaultValue
  )
  const [dataSource, setDataSource] = useState<DataItem[]>(source)
  const [querystring, setQuerystring] = useState<string>("")
  const [touched, setTouched] = useState(false)

  const props = _.omit(rest, [..._.keys(rules), ..._.keys(sizes)])

  const [focus, setFocus] = useState<boolean>(false)
  const className = utilService.parseClassName({
    focus,
    touched,
    errors,
    capitalize,
  })

  const { onChange, validate, value } = useField(name, rules)
  const inputRef: any = useRef()

  /**
   * Handle dataSource changes after first render
   *
   */
  useEffect(() => {
    if (!_.isEqual(dataSource, source)) {
      setDataSource(source)
      setSelectedItem(null)
      return
    }
    setDataSource(source)
  }, [source])

  /**
   * Handle values changes after first render
   *
   */
  useEffect(() => {
    if (!value) return

    // Check if the item is correct
    const item = dataSource.find((item) => item.value === value)
    if (item?.value !== selectedItem?.value) {
      handleItemSelection(item as DataItem, false)()
    }
  }, [value])

  /**
   * Handle values changes after first render
   *
   */
  useEffect(() => {
    if (!defaultValue) return

    // Check if the item is correct
    const item = dataSource.find((item) => item.value === defaultValue)
    if (item?.value !== selectedItem?.value) {
      handleItemSelection(item as DataItem, false)()
    }
  }, [defaultValue])

  /**
   * Handle item selection
   *
   */
  function handleItemSelection(item: DataItem, isTouched: boolean) {
    return function () {
      if (item.value === selectedItem?.value) return

      // Set actived item
      setSelectedItem(item)
      onChange(item.value)
      setErrors(validate())
      setTouched(isTouched)
      setQuerystring("")
    }
  }

  /**
   * Handle clear selection
   *
   */
  function handleClearSelection() {
    setSelectedItem(null)
    onChange(null)
    setErrors(validate())
    setTouched(true)
    setQuerystring("")
  }

  /**
   * Handle text input changes
   *
   */
  function handleInputChange(e: any) {
    setQuerystring(e.target.value)
  }

  /**
   * Handle input value changes
   *
   */
  function getInputValue() {
    if (focus) {
      return querystring
    }
    return selectedItem?.label || ""
  }

  /**
   * Handle input focus
   *
   */
  function handleFocus() {
    setFocus(true)
  }

  /**
   * Handle search input blur
   *
   */
  function handleBlur() {
    setFocus(false)
  }

  /**
   * Handle empty list
   */
  function handleEmptyList(list: any[]) {
    if (list.length > 0) return list
    return <li>Nenhuma opção encontrada</li>
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
          ref={inputRef}
          {...props}
        />
        <div className="icon-container has-after-icon">
          {selectedItem && (
            <IoMdCloseCircle
              className="hoverble"
              onClick={handleClearSelection}
            />
          )}
          <BsChevronDown
            className="hoverble"
            onClick={() => inputRef?.current?.focus()}
          />
        </div>
        <Dropdown className={className}>
          {handleEmptyList(
            dataSource
              .filter((item) => utilService.matches(querystring, item.label))
              .map((item) => (
                <li
                  key={item.value}
                  onMouseDown={handleItemSelection(item, true)}
                >
                  {item.label}
                </li>
              ))
          )}
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
