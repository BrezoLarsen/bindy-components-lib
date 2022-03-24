# bindy-components-lib
Components collection 

TABLE OF CONTENT

- [Bindy components](#bindy-components)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components Ref](#components-ref)
  - [Development](#development)

## Requirements

- node: ~14.17.0
- npm: ~6.14.13

## Installation

```console
npm i @bindy/components
```

## Usage

Import the modules that you want to use

```typescript
import { BindyCard } from '@bindy/components';

@NgModule({
  declarations: [],
  imports: [BindyCard],
  providers: [],
})
export class MyModule {}
```

and use it:

```html
<bindy-card>My awesome card</bindy-card>
```

## Components Ref




## Development

main scripts definition:

- **start**: start de demo (to show live changes withing the componentes library)
- **lint**: lint code files
- **lint:scss**: lint scss files
