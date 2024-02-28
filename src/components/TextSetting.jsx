import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const TextSetting = () => {
    return (
        <Wrapper>
            <Input placeholder="Search name" />
            <ButtonGroup>
                <Button>Reset</Button>
                <Button type="primary">Search</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default TextSetting;

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