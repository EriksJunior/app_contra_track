/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from "luxon";
import React, { useContext } from "react";
import { GeneralContext } from "@/context";

import { Label } from "../Label";
import { DropDown } from "../DropDown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import * as T from "./style";

import { defaultActions, defaultTable } from "./common";

interface Props {
  items?: typeof defaultTable
  dropDownItems?: typeof defaultActions
  children?: React.ReactNode
  enablePaginate?: boolean
  page?: number
  nextPage?: () => void
  previousPage?: () => void
  enableTitleTable?: boolean
  titleTable?: string
  maxHeight?: string
  valueToJoinHtmlFor?: string
}

export function Table({
  items = defaultTable,
  dropDownItems = defaultActions,
  children,
  enablePaginate = false,
  page = 1,
  nextPage,
  previousPage,
  enableTitleTable = false,
  titleTable = "Default Title table",
  maxHeight = "500px",
  valueToJoinHtmlFor = "default",
}: Props) {
  const { theme } = useContext(GeneralContext);

  return (
    <T.Container>
      <div style={{ height: '100%' }}>
        <div style={{ padding: "0", marginBottom: '1rem' }}>{children}</div>

        {enableTitleTable && (
          <div style={{ padding: "0 0.5rem" }}>
            <Label text={titleTable} fontSize={"16px"} />
          </div>
        )}

        <T.Table $theme={theme} $maxHeight={maxHeight}>
          <thead>
            <tr>
              {items.headers.map((header) => (
                <th key={header.key}>{header.text}</th>
              ))}

              <th style={{ width: "20%", textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>

          {items.body.length > 0 ? (
            <tbody>
              {items.body.map((item: any, index) => (
                <tr key={item?.id || index}>
                  {items.headers.map((_, idx) => (
                    <td key={idx} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {DateTime.fromISO((item[items.headers[idx]?.key]))?.isValid
                        ? item[items.headers[idx]?.key]
                          ?.split("-")
                          ?.reverse()
                          ?.join("/")
                        : item[items.headers[idx]?.key]}
                    </td>
                  ))}

                  <td style={{ width: "20%", textAlign: "center" }}>
                    <DropDown
                      items={dropDownItems}
                      htmlFor={`item-${index}-${valueToJoinHtmlFor}`}
                      value={item?.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody
              className="noSearch"
              style={{ overflow: "hidden", height: "100%", maxHeight: "100%" }}
            ></tbody>
          )}

          {enablePaginate &&
            <T.ContentPaginate $theme={theme}>
              <tr>
                <td colSpan={12}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <T.PageActions onClick={previousPage}>
                      <FaArrowLeft size={16} color="white"/>
                      <p>Anterior</p>
                    </T.PageActions>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <T.PageNumbers $isSelected={true}>
                        <p>{page}</p>
                      </T.PageNumbers>

                      <T.PageNumbers>
                        <p>2</p>
                      </T.PageNumbers>

                      <T.PageNumbers>
                        <p>3</p>
                      </T.PageNumbers>

                      <div style={{
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                        <p>. . .</p>
                      </div>

                      <T.PageNumbers>
                        <p>8</p>
                      </T.PageNumbers>

                      <T.PageNumbers>
                        <p>9</p>
                      </T.PageNumbers>

                      <T.PageNumbers>
                        <p>10</p>
                      </T.PageNumbers>
                    </div>

                    <T.PageActions onClick={nextPage}>
                      <p>Proximo</p>

                      <FaArrowRight size={16} color="white"/>
                    </T.PageActions>
                  </div>
                </td>
              </tr>
            </T.ContentPaginate>
          }
        </T.Table>
      </div>
    </T.Container>
  );
}
