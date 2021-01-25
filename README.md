## Front End Util write by Typescript

* install

```bash
npm i fe_ts_utils
```

* use fe_ts_utils

```ts
import fu from 'fe_ts_utils'

example

fu.toArray('abc') // ['abc']
```

- [Array](#array)
- [Date](#date)
- [Email](#email)
- [Format](#format)
- [Number](#number)

## Array

### <code>fu.toArray()</code>将输入值转数组

```ts
toArray(null) // [null]
toArray(true) // [true]
toArray('test') // ['test']
```

## Date

### 返回前day天的日期

```ts
fu.daysAgo(7) // 2021-01-18 (if current date is 2021-01-25)
```

### 返回后day天的日期

```ts
fu.daysFromNow(1) // 2021-01-26 (if current date is 2021-01-25)
```

## Email

### 判断邮箱是否合法

```ts
fu.isEmail('2428306489@qq.com') // true
fu.isEmail('2428306489qq.com') // false
```

## Format

### 短横线转驼峰,第二个参数可选

```ts
fu.toCamelCase('my-test-components') // myTestComponents
fu.toCamelCase('my-test-components', true) // MyTestComponents
```

### 字符串首字母转大写

```ts
fu.capitalFirst('test') // Test
```

## Number
