
# @listingslab/toolkit

Everything a pr0 React developer needs before breakfast in the Listingslab ToolKit

#### Usage

```bash
cd <your-project>
npm i @listingslab/toolkit
```

#### Node JS Serverless API

- [API](./node/api)

#### WordPress Plugins

- [@Toolkit](./wp-content/plugins/listingslab-toolkit)
- [@PingPong](./wp-content/plugins/listingslab-pingpong)
- [@PWAify](./wp-content/plugins/listingslab-pwaify)

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

