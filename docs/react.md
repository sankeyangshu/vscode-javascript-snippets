# React Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

<br>

### React Components

#### `rafc`

```javascript
import React from 'react';

export function $1() {
  return <div>$0</div>;
}
```

#### `rafcp`

```javascript
import PropTypes from 'prop-types';
import React from 'react';

function $1(props) {
  return <div>$0</div>;
}

$1.propTypes = {};

export default $1;
```

#### `rafce`

```javascript
import React from 'react';

function $1() {
  return <div>$0</div>;
}

export default $1;
```

#### `rccp`

```javascript
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  };

  render() {
    return <div>$4</div>;
  }
}
```

#### `rcc`

```javascript
import React, { Component } from 'react';

export default class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}
```

#### `rce`

```javascript
import React, { Component } from 'react';

export class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

#### `rcep`

```javascript
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class FileName extends Component {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

#### `rpce`

```javascript
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default FileName;
```

#### `rpc`

```javascript
import React, { PureComponent } from 'react';

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>;
  }
}
```

#### `rpcp`

```javascript
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}
```

#### `rmc`

```javascript
import React, { memo } from 'react';

export default memo(() => {
  return <div>$0</div>;
});
```

#### `rmcp`

```javascript
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const $1 = memo((props) => {
  return <div>$0</div>;
});

$1.propTypes = {};

export default $1;
```

#### `rfc`

```javascript
import React from 'react';

export default function $1() {
  return <div>$0</div>;
}
```

#### `rfcp`

```javascript
import PropTypes from 'prop-types';
import React from 'react';

function $1(props) {
  return <div>$0</div>;
}

$1.propTypes = {};

export default $1;
```

#### `rfce`

```javascript
import React from 'react';

function $1() {
  return <div>$0</div>;
}

export default $1;
```

### React Hooks

| Snippet              | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `useState`           | React useState hook                        |
| `useEffect`          | React useEffect hook                       |
| `useContext`         | React useContext hook                      |
| `useReducer`         | React useReducer hook                      |
| `useCallback`        | React useCallback hook                     |
| `useMemo`            | React useMemo hook                         |
| `useRef`             | React useRef hook                          |
| `useImperativeHandle`| React useImperativeHandle hook             |
| `useLayoutEffect`    | React useLayoutEffect hook                 |

### Zustand

| Snippet      | Purpose                               |
| ------------ | ------------------------------------- |
| `rzust`      | Zustand store                         |
| `rtzust`     | Zustand store with TypeScript         |

### React Native Components

| Snippet  | Purpose                                                      |
| -------- | ------------------------------------------------------------ |
| `rnc`    | React Native class component                                 |
| `rnf`    | React Native functional component                            |
| `rnfs`   | React Native functional component with StyleSheet            |
| `rnfe`   | React Native functional export component                     |
| `rnfes`  | React Native functional export component with StyleSheet     |
| `rncs`   | React Native class component with StyleSheet                 |
| `rnce`   | React Native class export component                          |
| `rnpc`   | React Native pure class component                            |
| `rnpce`  | React Native pure class export component                     |
| `imrn`   | Import from React Native                                     |
| `rnstyle`| React Native StyleSheet                                      |
