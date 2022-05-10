import * as React from 'react';

export class InputNode extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            label: '',
        };
    }

	render() {
		return (
			<div className="inputNode">
                <form>
                    <label>{this.props.property}:
                        <input
                            type="text"
                            value={this.state.label}
                            onChange={(e) => {
                                this.setState({label: e.target.value});
                            }}
                        />
                    </label>
                </form>
			</div>
		);
	}
}