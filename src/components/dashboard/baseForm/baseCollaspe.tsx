/** @format */

import React, { useState } from "react";
import { Collapse, Icon } from "@blueprintjs/core";
import styled from "styled-components";
// import { Control } from 'react-redux-form';
import { IconName } from "@blueprintjs/icons";

export interface HeaderSubcomponentsConfigType {
  icon?: IconName;
  text?: string;
  action?: any;
}

export interface Props {
  title: string;
  className?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  headerSubcomponents?: headerSubcomponentsType;
  children?: JSX.Element[] | JSX.Element | null;
}

type headerSubcomponentsType =
  | JSX.Element
  | JSX.Element[]
  | HeaderSubcomponentsConfigType[];

const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 10px;
  .headerArea {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    .headerTitle {
      color: #fff;
      flex: 2;
      widht: 1px;
      display: flex;
      align-items: center;
    }
    .headerSubcomponents {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      widht: 1px;
      flex: 4;
    }
    .headerIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      widht: 1px;
      height: 100%;
      flex: 1;
      transform-origin: center;
      transition: transform 400ms;
    }
  }
`;
/**
 *
 * @param param 用于判断复合类型JSX.Element
 */
const isJSXElementArray = (
  param: headerSubcomponentsType,
): param is JSX.Element[] => {
  return !Array.isArray(param);
};

const handleIconClick = (e: React.MouseEvent, cb: any) => {
  e.stopPropagation(); //阻止冒泡，防止ICON点击，引起折叠的状态变化
  cb && cb();
};

/**
 *
 * @param dataSource header 中icon的数据源
 */
const renderHeaderSubcomponents = (dataSource?: headerSubcomponentsType) => {
  if (!dataSource) {
    return;
  }
  if (isJSXElementArray(dataSource)) {
    return dataSource;
  }

  if (Array.isArray(dataSource)) {
    return dataSource.map(
      (item: HeaderSubcomponentsConfigType, index: number) => {
        if (item.action) {
          return (
            <Icon
              key={index}
              icon={item.icon}
              onClick={(e: any) => handleIconClick(e, item.action)}
            />
          );
        } else {
          return <Icon key={index} icon={item.icon} />;
        }
      },
    );
  }
};

export default (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const { className, children, headerSubcomponents, title } = props;
  let EXClassName: string[] = [""];
  if (className) {
    EXClassName = className.split(" ");
  }
  return (
    <Container>
      <div onClick={() => setOpen(!isOpen)} className="headerArea">
        <div className={["headerTitle", ...EXClassName].join(" ")}>{title}</div>
        <div className="headerSubcomponents">
          {renderHeaderSubcomponents(headerSubcomponents)}
        </div>
        <div
          className="headerIcon"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <Icon icon="chevron-right" />
        </div>
      </div>

      <Collapse isOpen={isOpen}>{children}</Collapse>
    </Container>
  );
};
