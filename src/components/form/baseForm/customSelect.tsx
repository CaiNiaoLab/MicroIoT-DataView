/**
 * Select下拉组件，popover版本
 *
 * @format
 */

import React, { useState, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Popover,
  Position,
  Classes,
} from "@blueprintjs/core";

/**
 * 下拉项的每一项
 */
export interface ISelectItem {
  text: string; // option名称
  value: string | number; // option的值
}

export default function(props: any) {
  const { onChange, value } = props;
  const [activeText, setActiveText] = useState("");
  const items: ISelectItem[] = props.children.map((child: any) => {
    if (child.type !== "option") {
      throw new Error("子项必须是option标签");
    }
    return {
      text: child.props.children,
      value: child.props.value,
    };
  });

  useEffect(() => {
    const activeItem = items.find((item: ISelectItem) => item.value === value);
    if (!activeItem) {
      setActiveText("请选择下拉项...");
    } else {
      setActiveText(activeItem.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleClick = (e: any) => {
    const text = e.target.innerText;
    const activeItem: ISelectItem | undefined = items.find(
      (item: ISelectItem) => item.text === text,
    );
    if (activeItem) {
      onChange(activeItem.value);
      setActiveText(activeItem.text);
    } else {
      throw new Error("未找到匹配项");
    }
  };
  const ItemList = (
    <Menu>
      {items.map((item: any) => (
        <MenuItem
          key={item.value}
          active={item.text === activeText}
          onClick={handleClick}
          text={item.text}
        />
      ))}
    </Menu>
  );
  return (
    <Popover fill={props.fill} content={ItemList} position={Position.BOTTOM}>
      <Button
        style={{ boxSizing: "border-box" }}
        className={Classes.TEXT_OVERFLOW_ELLIPSIS}
        minimal={false}
        rightIcon="double-caret-vertical"
        {...props.buttonProps}
        text={activeText}
      />
    </Popover>
  );
}
