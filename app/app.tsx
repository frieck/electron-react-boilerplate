import * as React from 'react';
var ReactDOM = require('react-dom');
import {Button, IconButton} from 'react-toolbox/lib/button';
import {Dialog} from 'react-toolbox/lib/dialog';

declare namespace JSX {
    interface IntrinsicElements {
    }
}

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
        <Button label='Show my dialog' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
  </div>
  ,
  document.getElementById('my-app')
);