import moment from "moment";
import { Component } from "react";
import style from "./Input.module.css";

interface IProps {
    type: string;
    placeholder?: any;
    value?: any;
    callBack: (value: any, value2?: any) => void;
    styleType: string;
    id?: string;
    text?: any;
    checked?: boolean;
    min?: number;
    max?: number;
    width?: number;
    height?: number;
    step?: number;
    disabled?: boolean;
    hidden?: boolean;
    accept?: string;
}

interface IState {
    textLength: number;
    validData: object;
    showError: boolean;
    errorStyle: object;
}

export default class Input extends Component<IProps, IState> {
    state = {
        textLength: 0,
        validData: {},
        showError: false,
        errorStyle: {},
    };

    resetState = () => {
        this.setState({ textLength: 0, validData: {}, showError: false });
    };
    hanldeOnChangeText = (event: any) => {
        this.resetState();
        console.log(event);
        console.log(event.target);
        if (event.target.value === "") {
            this.setState({ textLength: event.target.value.length });
        }
        switch (event.target.type) {
            case "text":
                this.props.callBack(event.target.value);
                break;
            case "password":
            case "email":
                this.setState({ ...this.state, textLength: event.target.value.length });
                this.props.callBack(event.target.value, this.state.showError);
                break;
            case "number":
                if (event.target.value !== "") {
                    this.setState({ textLength: 1 });
                } else {
                    this.setState({ textLength: 0 });
                }
                this.props.callBack(parseInt(event.target.value));
                break;
            case "checkbox":
            case "radio":
                this.props.callBack(event.target.checked);
                break;
            case "file":
                this.props.callBack(event.nativeEvent.target.files);
                break;
            case "date":
                if (moment(event.target.value, "YYYY-MM-DD", true).isValid()) {
                    this.setState({
                        ...this.state,
                        validData: { month: true },
                        showError: false,
                    });
                    this.props.callBack(event.target.value);
                } else {
                    this.setState({
                        ...this.state,
                        validData: { month: false },
                        showError: true,
                    });
                }
                break;
        }
    };

    render() {
        return (
            <div
                className={
                    this.props.styleType === "checkbox"
                        ? style.checkbox
                        : this.props.styleType === "Input"
                        ? style.Input
                        : this.props.styleType === "searchInput"
                        ? style.searchInput
                        : this.props.styleType === "commentInput"
                        ? style.commentInput
                        : ""
                }
            >
                <input
                    id={this.props.id}
                    type={this.props.type}
                    placeholder={this.props.placeholder !== "" || this.props.placeholder !== null ? this.props.placeholder : ""}
                    value={this.props.type === "number" ? (this.props.value === "" ? 0 : this.props.value) : this.props.value}
                    checked={this.props.checked}
                    onChange={this.hanldeOnChangeText}
                    max={this.props.max}
                    min={this.props.min}
                    width={this.props.width}
                    height={this.props.height}
                    step={this.props.step}
                    disabled={this.props.disabled}
                    hidden={this.props.hidden}
                    accept={this.props.accept}
                />
                {this.props.text ? <>{this.props.text}</> : ""}
            </div>
        );
    }
}
