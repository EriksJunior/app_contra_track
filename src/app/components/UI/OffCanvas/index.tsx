/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

import { HiPlus } from "react-icons/hi";
import * as Off from "./styles";

interface Props {
  title: string
  expanded: boolean
  onClose: () => void
  clearValues: () => void
  backgroundColor?: string
  width?: string
  children?: string
  colorCloseIcon?: string
  backgroundCloseIconColor?: string
  sizeCloseText?: string
  colorCloseText?: string
  colorTitle?: string
  fontSizeTitle?: string
}

export function OffCanvas({
  title = "Default Title",
  expanded = false,
  onClose,
  clearValues,
  backgroundColor,
  width,
  children,
  colorCloseIcon,
  backgroundCloseIconColor,
  sizeCloseText,
  colorCloseText,
  colorTitle,
  fontSizeTitle,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const closeIfClickEmpty = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.target as HTMLElement;

    if (!clickedElement.closest(".offCanvas")) {
      handleClose();
    }

  };

  useEffect(() => {
    setIsExpanded(expanded);

    if (expanded && clearValues) clearValues();
  }, [expanded]);

  return (
    <Off.Container $isOpen={isExpanded} onMouseDown={closeIfClickEmpty}>
      <Off.Content
        $isOpen={isExpanded}
        $backgroundColor={backgroundColor}
        $width={width}
        className="offCanvas"
      >
        <Off.ContainerTitleAndIcon>
          <Off.Title $colorTitle={colorTitle} $fontSizeTitle={fontSizeTitle}>
            {title}
          </Off.Title>

          <Off.Label
            onClick={handleClose}
            $sizeCloseText={sizeCloseText}
            $colorCloseText={colorCloseText}
          >
            <span>fechar</span>

            <Off.CloseIcon $backgroundCloseIconColor={backgroundCloseIconColor}>
              <HiPlus
                size={18}
                color={colorCloseIcon || "white"}
                style={{ transform: "rotate(45deg)" }}
              />
            </Off.CloseIcon>
          </Off.Label>
        </Off.ContainerTitleAndIcon>

        {children}
      </Off.Content>
    </Off.Container>
  );
}
