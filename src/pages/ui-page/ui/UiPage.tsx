import { FC } from 'react';

import Inner from '@/shared/ui/inner/ui/Inner';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';
import { ProductList } from '@/widgets';

const UiPage: FC = () => {
  return (
    <Inner>
      <Title
        tag="h1"
        variant="36"
        style={{ marginBottom: '20px' }}
      >
        UI Page
      </Title>
      <div
        style={{
          border: '1px solid #000',
          marginBottom: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Title
          tag="h2"
          variant="30"
          style={{ marginBottom: '10px' }}
        >
          Typography:
        </Title>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <Title
            tag="h1"
            variant="36"
          >
            Title h1
          </Title>
          <Title
            tag="h2"
            variant="30"
          >
            Title h2
          </Title>
          <Title
            tag="h3"
            variant="28"
          >
            Title h3
          </Title>
          <Title
            tag="h4"
            variant="24"
          >
            Title h4
          </Title>
          <Title
            tag="h5"
            variant="20"
          >
            Title h5
          </Title>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <Text variant="18">Text</Text>
          <Text variant="16">Text</Text>
          <Text variant="14">Text</Text>
          <Text variant="13">Text</Text>
        </div>
      </div>
      <ProductList />
    </Inner>
  );
};

export default UiPage;
