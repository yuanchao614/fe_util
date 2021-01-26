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
- [Dom](#dom)
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

## Dom

### 判断HTMLElement上是否存在指定class

```ts
 const image = document.createElement('img');
 image.className = 'test-yc-class';
 image.classList.add("anotherclass");
 fu.hasClass(image, 'anotherclass') // true
 fu.hasClass(image, 'test-yc') // false
```

### HTMLElement上添加指定class

```ts
fu.addClass(image, 'test-class')
```

### HTMLElement上移除指定class

```ts
fu.removeClass(image, 'test-class')
```

### 获取HTMLElement上style

```ts
fu.getStyle(image, 'width')
```

### HTMLElement上添加style

```ts
fu.setStyle(image, 'height', '200px')
```

### HTMLElement上移除style

```ts
fu.removeStyle(image, 'height')
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
