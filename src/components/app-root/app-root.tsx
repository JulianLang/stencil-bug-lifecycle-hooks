import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <toggle-group name="GroupA">
          <toggle-button name="ButtonA">ButtonA</toggle-button>

          <toggle-group name="GroupB">
            <toggle-button name="ButtonB">ButtonB</toggle-button>
          </toggle-group>
        </toggle-group>
      </Host>
    );
  }
}
