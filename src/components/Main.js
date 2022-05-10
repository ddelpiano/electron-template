import React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import createEngine, { DiagramModel, DefaultNodeModel, DefaultLinkModel } from '@projectstorm/react-diagrams';
import { JSCustomNodeModel } from './custom-node/JSCustomNodeModel';
import { JSCustomNodeFactory } from './custom-node/JSCustomNodeFactory';
// import '../App.css';

export default class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    //1) setup the diagram engine
	var engine = createEngine();
    engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());


	//2) setup the diagram model
	var model = new DiagramModel();

	//3-A) create a default node
	var node1 = new JSCustomNodeModel({
		name: 'Node 1',
		color: 'rgb(0,192,255)',
        pnlClass: 'ProcessingMechanism'
	});
	node1.setPosition(100, 100);
	// let port1 = node1.addOutPort('Out');

	//3-B) create another default node
	var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
	let port2 = node2.addInPort('in');
	node2.setPosition(400, 100);

	// link the ports
	// let link1 = port1.link(port2);
	// link1.getOptions().testName = 'Test';
	// link1.addLabel('Hello World!');
    const link1 = new DefaultLinkModel();
    link1.setSourcePort(node1.getPort('out'));
    link1.setTargetPort(node2.getPort('in'));

	//4) add the models to the root graph
	model.addAll(node1, node2, link1);

	//5) load model into engine
	engine.setModel(model);

    return (
        <div style={{ height: '100%', width: '100%'}}>
            <CanvasWidget className="diagram-container" engine={engine} />
        </div>
    );
  }
}