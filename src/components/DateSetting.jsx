import React from "react";
import styled from "styled-components";
import { Select, Button, DatePicker } from "antd";

const Option = Select.Option;

const DateSetting = () => {
    return (
        <Wrapper>
            <Select showSearch defaultValue="before">
                <Option value="before">before</Option>
                <Option value="after">after</Option>
            </Select>
            <DatePicker />
            <ButtonGroup>
                <Button>Reset</Button>
                <Button type="primary">Searchfor</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default DateSetting;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;

    & > button {
        flex: 1;
    }
`