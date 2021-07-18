import { text, number, boolean } from '@storybook/addon-knobs';
import { UiLoginFormComponent } from './ui-login-form.component';

export default {
  title: 'UiLoginFormComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: UiLoginFormComponent,
  props: {
    rotaHome: text('rotaHome', ''),
  }
})