import styled from "styled-components";
import { MenuOutlined } from '@ant-design/icons';
import { Row } from "antd";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding-right: 8px;
`
export const MenuIcon = styled(MenuOutlined)`
   font-size: 120%;
   color: white;
   cursor: pointer;
   font-weight: 600;
   :hover{
    transition: 1s;
    font-weight: 900;
   }
`
export const RowStytle = styled(Row)`
  min-height: 46px;
  background: #001529;
  margin-left: 3px;
  display: flex;
`
export const PopoverStyle = styled.div`
    min-width: 150px;
    min-height: 150px;
`
