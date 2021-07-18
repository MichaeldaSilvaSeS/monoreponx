
import { UiTitleComponent } from './ui-title.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'UiTitleComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: UiTitleComponent,
  props: {
    title: 'titulo'
  }
})