import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'toggle-group',
  styleUrl: 'toggle-group.css',
})
export class ToggleGroup {
  @Prop() name!: string;

  // connectedCallback() {
  //   console.log('connected', this.name);
  // }

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
