import { useMemo, useContext } from 'react'

import GroupContext from 'web/providers/GroupProvider/context'

export default function (value) {
  const params = useContext(GroupContext)

  const isSelected = useMemo(
    function () {
      return params.isSelected(value)
    },
    [params.isSelected, value]
  )

  return {
    isSelected
  }
}
