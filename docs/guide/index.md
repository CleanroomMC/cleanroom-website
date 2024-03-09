# Markdown & MDX

Rspress supports not only Markdown but also [MDX](https://mdxjs.com/), a powerful way to develop content.

## Markdown

MDX is a superset of Markdown, which means you can write Markdown files as usual. For example:

```md
# Hello World
```

## Use Component

When you want to use React components in Markdown files, you should name your files with `.mdx` extension. For example:

```mdx
// docs/index.mdx
import { CustomComponent } from './custom';

# Hello World

<CustomComponent />
```

## Front Matter

You can add Front Matter at the beginning of your Markdown file, which is a YAML-formatted object that defines some metadata. For example:

```yaml
---
title: Hello World
---
```

> Note: By default, Rspress uses h1 headings as html headings.

You can also access properties defined in Front Matter in the body, for example:

```markdown
---
title: Hello World
---

# {frontmatter.title}
```

The previously defined properties will be passed to the component as `frontmatter` properties. So the final output will be:

```html
<h1>Hello World</h1>
```

## Custom Container

You can use the `:::` syntax to create custom containers and support custom titles.
Any amount of whitespace may separate the starting `:::` block from the type declaration.
Any number of colons `:` greater than three may be used for the purpose of nesting.

The logic of custom containers has been partly overriden via ids, and
so they mainly function as aliases, with the `id` setting the actual color any symbol.
This is so the same logic can apply to expandable containers, created via `details`, which is not possible without it.

For example:

**Input:**

```markdown
:::tip {id="tip"}
This is a `block` of type `tip`
:::

:::info {id="info"}
This is a `block` of type `info`
:::

:::warning {id="warning"}
This is a `block` of type `warning`
:::

:::danger {id="danger"}
This is a `block` of type `danger`
:::

:::   details
This is a `block` of type `details`
:::

::: details {open}
This is a `block` of type `details`, expanded by default
:::

::::tip Custom Title
This is a `block` of `Custom Title`

:::tip {title="Custom Title but Nested!"}
This is a `block` of `Custom Title`
:::
::::

:::info {id="info"}
This is a `block` of type `info`
:::

:::info Note {id="note"}
This is a `block` of type `note`.
:::

:::details tip-but-details {id="tip"}
This is a `block` of type `tip`
:::

:::details success-but-details {open id="success"}
This is a `block` of type `success`
:::

:::details question-but-details {open id="question"}
This is a `block` of type `question`
:::

:::details warning-but-details {open id="warning"}
This is a `block` of type `warning`
:::

:::details failure-but-details {id="failure"}
This is a `block` of type `failure`
:::

:::info Danger {id="danger"}
This is a `block` of type `danger`
:::

:::info Bug {id="bug"}
This is a `block` of type `bug`
:::

:::info Abstract {id="abstract"}
This is a `block` of type `abstract`
:::

:::info Example {id="example"}
This is a `block` of type `example`
:::

:::info Quote {id="quote"}
This is a `block` of type `quote`
:::
```

**Output:**

:::tip {id="tip"}
This is a `block` of type `tip`
:::

:::info {id="info"}
This is a `block` of type `info`
:::

:::warning {id="warning"}
This is a `block` of type `warning`
:::

:::danger {id="danger"}
This is a `block` of type `danger`
:::

:::   details
This is a `block` of type `details`
:::

::: details {open}
This is a `block` of type `details`, expanded by default
:::

::::tip Custom Title
This is a `block` of `Custom Title`

:::tip {title="Custom Title but Nested!"}
This is a `block` of `Custom Title`
:::
::::

:::info {id="info"}
This is a `block` of type `info`
:::

:::info Note {id="note"}
This is a `block` of type `note`.
:::

:::details tip-but-details {id="tip"}
This is a `block` of type `tip`
:::

:::details success-but-details {open id="success"}
This is a `block` of type `success`
:::

:::details question-but-details {open id="question"}
This is a `block` of type `question`
:::

:::details warning-but-details {open id="warning"}
This is a `block` of type `warning`
:::

:::details failure-but-details {id="failure"}
This is a `block` of type `failure`
:::

:::info Danger {id="danger"}
This is a `block` of type `danger`
:::

:::info Bug {id="bug"}
This is a `block` of type `bug`
:::

:::info Abstract {id="abstract"}
This is a `block` of type `abstract`
:::

:::info Example {id="example"}
This is a `block` of type `example`
:::

:::info Quote {id="quote"}
This is a `block` of type `quote`
:::

## Code Block

### Basic Usage

You can use the \`\`\` syntax to create code blocks and support custom titles. For example:

**Input:**

````md
```js
console.log("Hello World");
```

```js title="hello.js"
console.log("Hello World");
```
````

**Output:**

```js
console.log("Hello World");
```

```js title="hello.js"
console.log("Hello World");
```

### Show Line Numbers

If you want to display line numbers, you can enable the `showLineNumbers` option in the config file:

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    showLineNumbers: true,
  },
};
```

### Wrap Code

If you want to wrap long code line by default, you can enable the `defaultWrapCode` option in the config file:

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    defaultWrapCode: true,
  },
};
```

### Line Highlighting

You can also apply line highlighting and code block title at the same time, for example:

**Input:**

````md
```js title="hello.js" {1,3-5}
console.log("Hello World");

const a = 1;

console.log(a);

const b = 2;

console.log(b);
```
````

**Ouput:**

```js title="hello.js" {1,3-5}
console.log("Hello World");

const a = 1;

console.log(a);

const b = 2;

console.log(b);
```

## Rustify MDX compiler

You can enable Rustify MDX compiler by following config:
