import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
})
export class ToggleButton {
  @Prop() name!: string;
  @Prop() mode: 'connected' | 'willLoad' | 'didLoad' = 'connected';

  connectedCallback() {
    console.log('connected', this.name);
  }

  componentWillLoad() {
    console.log('willLoad', this.name);
  }

  componentDidLoad() {
    console.log('didLoad', this.name);
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
