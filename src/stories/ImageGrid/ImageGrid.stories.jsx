import React from 'react';
import { ImageGrid } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';

export default {
    title: 'Components/ImageGrid',
    component: ImageGrid,
    argTypes: {},
    decorators: [
        (Story) => (
            <WithTextWrapper>
                <Story />
            </WithTextWrapper>
        ),
    ],
};

const sampleData = [
    {
      "id": 1,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 40
    },
    {
      "id": 2,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 42
    },
    {
      "id": 3,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 24
    },
    {
      "id": 4,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 31
    },
    {
      "id": 5,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 14
    },
    {
      "id": 6,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 16
    },
    {
      "id": 7,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 65
    },
    {
      "id": 8,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 54
    },
    {
      "id": 9,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 66
    },
    {
      "id": 10,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 19
    },
    {
      "id": 11,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 74
    },
    {
      "id": 12,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 34
    },
    {
      "id": 13,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 74
    },
    {
      "id": 14,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 22
    },
    {
      "id": 15,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 68
    },
    {
      "id": 16,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 38
    },
    {
      "id": 17,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 48
    },
    {
      "id": 18,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 77
    },
    {
      "id": 19,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 28
    },
    {
      "id": 20,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 26
    },
    {
      "id": 21,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 62
    },
    {
      "id": 22,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 56
    },
    {
      "id": 23,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 54
    },
    {
      "id": 24,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 39
    },
    {
      "id": 25,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 11
    },
    {
      "id": 26,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 22
    },
    {
      "id": 27,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 26
    },
    {
      "id": 28,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 34
    },
    {
      "id": 29,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 21
    },
    {
      "id": 30,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 18
    },
    {
      "id": 31,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 48
    },
    {
      "id": 32,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 72
    },
    {
      "id": 33,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 31
    },
    {
      "id": 34,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 40
    },
    {
      "id": 35,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 25
    },
    {
      "id": 36,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 12
    },
    {
      "id": 37,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 56
    },
    {
      "id": 38,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 63
    },
    {
      "id": 39,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 43
    },
    {
      "id": 40,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 72
    },
    {
      "id": 41,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 26
    },
    {
      "id": 42,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 34
    },
    {
      "id": 43,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 75
    },
    {
      "id": 44,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 46
    },
    {
      "id": 45,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 56
    },
    {
      "id": 46,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 79
    },
    {
      "id": 47,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 24
    },
    {
      "id": 48,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 61
    },
    {
      "id": 49,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 68
    },
    {
      "id": 50,
      "name": "Jane Doe",
      "imgSrc": "jane_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque.",
      "age": 80
    }
  ]
  

const Template = (args) => <ImageGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: sampleData,
};
