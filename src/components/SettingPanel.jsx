import React from "react";
import styled from "styled-components";
import { Radio } from "antd";

import TextSetting from "./TextSetting";
import DateSetting from "./DateSetting";

const SETTING_TYPE_LIST = [
    { label: "Text", value: "text" },
    { label: "Date", value: "date" },
]

class SettingPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: SETTING_TYPE_LIST[0].value
        }

        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChangeType(e) {
        const newType = e.target.value;
        this.setState({ type: newType });
    }

    render() {

        return (
            <Wrapper>
            <SettingBar>
                <Radio.Group value={this.state.type} onChange={this.handleChangeType}>
                    {SETTING_TYPE_LIST.map((t, idx) => {
                        const { label, value } = t;
                        return (
                            <Radio key={`setting-type-${idx}`} value={value}>{label}</Radio>
                        )
                    })}
                </Radio.Group>
            </SettingBar>
            {this.state.type === SETTING_TYPE_LIST[0].value && <TextSetting/>}
            {this.state.type === SETTING_TYPE_LIST[1].value && <DateSetting/>}
        </Wrapper>
        )
    }
}

export default SettingPanel;

const Wrapper = styled.div`
    padding-top: 8px;
    margin-left: 8px;
    max-width: 200px;
`

const SettingBar = styled.div`
    padding-bottom: 18px;
`

