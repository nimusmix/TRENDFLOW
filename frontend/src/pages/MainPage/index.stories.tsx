import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from '@/pages/MainPage';
import BaseLayout from '@/layouts/BaseLayout';
import ThemeComponent from '@/components/@shared/Storybook/ThemeComponent';
import { handlers } from '@/mocks/handlers';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template = () => (
  <ThemeComponent>
    <BaseLayout>
      <MainPage />
    </BaseLayout>
  </ThemeComponent>
);

export const MainPageTemplate: ComponentStory<typeof MainPage> = Template.bind({});
MainPageTemplate.args = {};
MainPageTemplate.parameters = {
  msw: {
    handlers: [...handlers],
  },
};
