/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Row } from "@/app/components/UI/Row"
import { Label } from "@/app/components/UI/Label"

interface Tabs {
  text: string
  component: React.ComponentType<any>
  active?: boolean
}

interface Props {
  tabs: Tabs[]
}

export function Tab({ tabs }: Props) {
  const [cloneTabs, setCloneTabs] = useState<Tabs[]>([])

  const activeTab = cloneTabs.find((cTab) => cTab.active);

  const handleClick = (idxItem: number) => {
    const newClone = cloneTabs.map((item, idx) => {
      return {
        ...item,
        active: idxItem === idx ? true : false
      }
    })

    setCloneTabs(newClone)
  }

  useEffect(() => {
    if (tabs && tabs.length) {
      const newItems = tabs.map((tab, idx) => {
        return {
          ...tab,
          active: !idx ? true : false
        }
      })

      setCloneTabs(newItems)
    }
  }, [tabs])

  return (
    <>
      <Row>
        {cloneTabs.map((tab, idx) => (
          <div key={tab.text} onClick={() => handleClick(idx)}>
            <div style={{ borderRadius: 5, padding: '0.2rem 0.8rem', cursor: 'pointer', ...(tab.active && { backgroundColor: "#80808024" }) }}>
              <Label text={tab.text} color="black" />
            </div>
          </div>
        ))}
      </Row>

      <Row>
        {activeTab && activeTab.component && (
          <activeTab.component text={`TAB ${cloneTabs.indexOf(activeTab) + 1}`} />
        )}
      </Row>
    </>
  )
}