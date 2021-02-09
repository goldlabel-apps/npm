# @listingslab/toolkit

> Get everything a pr0 React developer needs before breakfast and more in the Listingslab ToolKit

#### Install

```bash
cd <your-project>
npm i @listingslab/toolkit
```

#### Vanilla JS

- [slugify](./helpers/slugify.js)

```javascript
import { slugify } from '@listingslab/toolkit'

const slug = slugify( `Changes this string to a nice url slug` )
console.log ('slug', slug)
```
- [ordinalSuffix](./helpers/ordinalSuffix.js)

```javascript
import { ordinalSuffix } from '@listingslab/toolkit'

const suffixedNumber = ordinalSuffix( 10 )
console.log ('suffixedNumber', suffixedNumber) // 10th
```
- [orderByEpoch](./helpers/orderByEpoch.js)

#### React

- [Cannastore](./Cannastore)

```javascript
import { Cannastore } from '@listingslab/toolkit'
export default function YourApp() {
	return	<Cannastore />
}
```

- [Push2Talk](./Push2Talk)

```javascript
import { Push2Talk } from '@listingslab/toolkit'
export default function YourApp() {
	return	<Push2Talk />
}

