/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Row } from "@/components/UI/Row"
import { ActiveTab, ContentTabText, TabText } from "./styles"

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
            <ContentTabText style={{
              ...(tab.active && { backgroundColor: "#80808024" })
            }}>
              <TabText $color={tab.active ? 'black' : '#6b6b6bdd'}>
                {tab.text}
              </TabText>
            </ContentTabText>
          </div>
        ))}
      </Row>


      <ActiveTab>
        {activeTab && activeTab.component && (
          <activeTab.component text={`TAB ${cloneTabs.indexOf(activeTab) + 1}`} />
        )}
      </ActiveTab>
    </>
  )
}