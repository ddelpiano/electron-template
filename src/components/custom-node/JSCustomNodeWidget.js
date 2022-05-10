import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import { InputNode } from './InputNode';

export class JSCustomNodeWidget extends React.Component {
	render() {
		return (
			<div className="custom-node">
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
					<div className="circle-port" />
				</PortWidget>
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}>
					<div className="circle-port" />
				</PortWidget>
				<div className="custom-node-color" style={{ backgroundColor: this.props.node.color }} />
				<div style={{left: '0px', bottom: '100%', display: 'flex', flexDirection: 'column'}}>
					<InputNode property="Props1" />
					<InputNode property="Props2" />
				</div>
			</div>
		);
	}
}