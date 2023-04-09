## @peterroe/utils

utils for conding

### debug

```ts
import { debug } from '@peterroe/utils'

const mode = process.env.NODE_ENV === 'production'

const log = debug(mode)

declare function log(desc: string, content: any, depth: number | null = null)
```

### random

```ts
import { random } from '@peterroe/utils'

declare function random(length: number)
```