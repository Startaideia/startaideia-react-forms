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
function Multi({ name, label, capitalize, source, creatable, ...rest }: Props) {
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [errors, setErrors] = useState<String[] | null>(null)
  const fieldRef = useRef()

  const [selectedItem, setSelectedItem] = useState<DataItem[]>([])
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
      setSelectedItem([])
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
    const data = _.intersection(dataSource, value)
    data.map((item: DataItem) => handleItemSelection(item, false))
  }, [value])

  /**
   * Handle item selection
   *
   */
  function handleItemSelection(item: DataItem, isTouched: boolean) {
    return function () {
      const data = [...selectedItem, item]
      setSelectedItem(data)
      onChange(data.map((item: DataItem) => item.value))
      setErrors(validate())
      setTouched(isTouched)
      setQuerystring("")
    }
  }

  /**
   * Handle clear selection
   *
   */
  function handleClearSelection(item: any) {
    return function (e: any) {
      e.preventDefault()
      const data = [...selectedItem]
      const index = selectedItem.indexOf(item)
      data.splice(index, 1)
      setSelectedItem(data)
      onChange(data.map((item: DataItem) => item.value))
      setErrors(validate())
      setTouched(true)
    }
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
    return ""
  }

  /**
   * Handle item creation
   *
   */
  function handleItemCreate() {
    handleItemSelection(
      {
        label: querystring,
        value: querystring,
      },
      true
    )()
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
    if (creatable) {
      return <li onMouseDown={handleItemCreate}>Criar item: {querystring}</li>
    }
    return <li>Nenhum item encontrado</li>
  }

  return (
    <Col xs={12} {...sizes}>
      <Field ref={fieldRef} className={className}>
        {label && <Label className={className}>{label}</Label>}
        {selectedItem.length > 0 && (
          <div className="badge-container">
            {selectedItem.map((item, key) => (
              <span
                onClick={handleClearSelection(item)}
                className="badge"
                key={key}
              >
                {item.label}
                <IoMdCloseCircle className="hoverble" />
              </span>
            ))}
          </div>
        )}
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
          <BsChevronDown
            className="hoverble"
            onClick={() => inputRef?.current?.focus()}
          />
        </div>
        <Dropdown
          fieldHeight={(fieldRef?.current as any)?.clientHeight}
          className={className}
        >
          {handleEmptyList(
            _.difference(dataSource, selectedItem)
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

export default Multi
