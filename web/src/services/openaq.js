// @flow
import React, {Component} from 'react';
import {Measurements, Parameters} from "./types/data.d";
import {AxiosInstance} from 'axios';
import {Get} from 'react-axios';
import {Field, Label, Control, Select} from 'bloomer';

const BASE_URL = 'https://api.openaq.org/v1';

type AxiosResponse<T> = {
    config: Object;
    data: T;
    headers: Object;
    request: any;
    status: number;
    statusText: string;
}

type Props = {
    axios: AxiosInstance
};

type State = {
    parameters: Array<string>;
};

export class ParameterDropdown extends Component<Props, State> {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <Get instance={this.props.axios} url='/parameters'>
                    {
                        (error: any, response: AxiosResponse<Parameters>, isLoading: boolean) => {
                            if (error) {
                                return (<div>
                                    <Field>
                                        <Label>Select Parameter</Label>
                                        <Control>
                                            <Select>
                                                <option>Select a Parameter</option>
                                            </Select>
                                        </Control>
                                    </Field>
                                </div>)
                            } else if (response !== null) {
                                let data: Array<string> = [];
                                response.data.results.map(parameter => {
                                    data.push(parameter.name);
                                });
                                this.setState({
                                    parameters: data
                                });
                            } else if(isLoading) {
                                return (<div>Loading...</div>)
                            }
                            return (<div>
                                <Field>
                                    <Label>Select Parameter</Label>
                                    <Control>
                                        <Select>
                                            <option>Select a Parameter</option>
                                        </Select>
                                    </Control>
                                </Field>
                            </div>)
                        }
                    }
                </Get>
            </div>
        )
    }
}
