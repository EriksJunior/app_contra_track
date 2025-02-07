/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useRef, useEffect } from "react";
import { InputLabel } from "@/components/UI/Inputs/InputText";
import * as S from "./styles";

import {
  defaultFilterOptions,
  defaultIsActiveOptions,
  defaultSituationOptions,
} from "./common";

interface Props {
  getValues: (filter: Filter) => void
  defaultFilter: string
  placeholder?: string
  searchIconColor?: string
  filterIconColor?: string
  filterOptions?: typeof defaultFilterOptions
  isActiveOptions?: typeof defaultIsActiveOptions
  situationOptions?: typeof defaultSituationOptions
  filterOptionsIsEnable?: boolean
  periodIsEnable?: boolean
  isActiveOptionsIsEnable?: boolean
  situationOptionsIsEnable?: boolean
}

interface Filter {
  text: string
  type: string
  isActive: boolean
  situation: string
  startDate: string
  endDate: string
  page: number
}

export function SearchBar({
  placeholder = "Realize aqui a sua busca",
  searchIconColor = "rgb(118 133 201)",
  filterIconColor = "rgb(118 133 201)",
  filterOptions = defaultFilterOptions,
  isActiveOptions = defaultIsActiveOptions,
  situationOptions = defaultSituationOptions,
  filterOptionsIsEnable = true,
  periodIsEnable = false,
  isActiveOptionsIsEnable = false,
  situationOptionsIsEnable = false,
  getValues,
  defaultFilter,
}: Props) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [widthElement, setWidthElement] = useState(0);
  const [filter, setFilter] = useState<Filter>({
    text: "",
    type: defaultFilter || '',
    isActive: true,
    situation: "",
    startDate: "",
    endDate: "",
    page: 1
  });

  const refFilterOptions = useRef<HTMLDivElement>(null);

  const handleFilterBoxClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const handleFilterIconClick = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  const getElementWidth = () => {
    if (refFilterOptions.current) {
      setWidthElement(refFilterOptions.current.offsetWidth);
    }
  };

  const handleChange = (key: string, value: string | boolean) => {
    setFilter({ ...filter, [key]: value });
  };

  useEffect(() => {
    getValues(filter);
  }, [filter])

  useEffect(() => {
    if (isFilterBoxOpen) {
      getElementWidth();
    }
  }, [isFilterBoxOpen]);

  return (
    <S.SearchContainer>
      <S.SearchContent>
        <S.SearchIcon
          $searchIconColor={searchIconColor}
          onClick={() => console.log(filter)}
        />

        <S.Label htmlFor="inputSearch">
          <S.InputSearch
            type="text"
            id="inputSearch"
            placeholder={placeholder}
            onInput={(event: React.FormEvent<HTMLInputElement>) => handleChange('text', event.currentTarget.value)}
          />
        </S.Label>
      </S.SearchContent>

      <S.ContainerFilterOptionsBox htmlFor="contentFilterOptions">
        <S.FilterIcon
          size={35}
          $filterIconColor={filterIconColor}
          onClick={handleFilterIconClick}
        />
        <S.InputFilterBoxOptions type="radio" id="contentFilterOptions" />

        <S.ContentBoxOptions
          className="filterOptionsBox"
          onClick={handleFilterBoxClick}
          $isFilterBoxOpen={isFilterBoxOpen}
        >
          {filterOptionsIsEnable && (
            <div>
              <S.TitleBoxOptions>Filtros</S.TitleBoxOptions>

              <S.ContentOptions
                ref={refFilterOptions}
                $actualWidth={widthElement}
              >
                {filterOptions.map((option, i) => (
                  <S.LabelOptions
                    htmlFor={`filter-${i}`}
                    key={option.value || i}
                  >
                    <S.InputFilterBoxOptions
                      type="radio"
                      id={`filter-${i}`}
                      onInput={() =>
                        handleChange('type', option.value)
                      }
                      defaultChecked={option.isActive}
                    />
                    <S.Options>{option.text}</S.Options>
                  </S.LabelOptions>
                ))}
              </S.ContentOptions>
            </div>
          )}

          {isActiveOptionsIsEnable && (
            <div>
              <S.TitleBoxOptions>Status</S.TitleBoxOptions>

              <S.ContentOptions>
                {isActiveOptions.map((status, i) => (
                  <S.LabelOptions
                    htmlFor={`status-${i}`}
                    key={i}
                  >
                    <S.InputFilterBoxOptions
                      type="radio"
                      id={`status-${i}`}
                      name="isActive"
                      onChange={({ target }) =>
                        handleChange(target.name, status.value)
                      }
                      defaultChecked={status.value}
                    />
                    <S.Options>{status.text}</S.Options>
                  </S.LabelOptions>
                ))}
              </S.ContentOptions>
            </div>
          )}

          {situationOptionsIsEnable && (
            <div>
              <S.TitleBoxOptions>Situação</S.TitleBoxOptions>

              <S.ContentOptions>
                {situationOptions.map((situation, i) => (
                  <S.LabelOptions
                    htmlFor={`situation-${i}`}
                    key={situation.value || i}
                  >
                    <S.InputFilterBoxOptions
                      type="radio"
                      id={`situation-${i}`}
                      onInput={() =>
                        handleChange('situation', situation.value)
                      }
                    />
                    <S.Options>{situation.text}</S.Options>
                  </S.LabelOptions>
                ))}
              </S.ContentOptions>
            </div>
          )}

          {periodIsEnable && (
            <div>
              <S.TitleBoxOptions>Períodos</S.TitleBoxOptions>

              <S.ContentOptions>
                <div style={{ width: "125px" }}>
                  <InputLabel
                    typeInput="date"
                    textLabel="Inicio"
                    colorLabel={"#808080c2"}
                    handleChange={(event: React.FormEvent<HTMLInputElement>) =>
                      handleChange("startDate", event.currentTarget.value)
                    }
                    value={filter.startDate}
                  />
                </div>
                <div style={{ width: "125px" }}>
                  <InputLabel
                    typeInput="date"
                    textLabel="Fim"
                    colorLabel={"#808080c2"}
                    handleChange={(event: React.FormEvent<HTMLInputElement>) =>
                      handleChange("endDate", event.currentTarget.value)
                    }
                    value={filter.endDate}
                  />
                </div>
              </S.ContentOptions>
            </div>
          )}
        </S.ContentBoxOptions>
      </S.ContainerFilterOptionsBox>
    </S.SearchContainer>
  );
}
