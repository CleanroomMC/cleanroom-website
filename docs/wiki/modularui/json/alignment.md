---
title: Alignment
---

# Alignment

Alignment is an object with an x and y component. Where 0.0 means start and 1.0 means end.

## Alignment by name

ModularUI has 9 default alignments.

- `top_left` or `tl`
- `top_center` or `tc`
- `top_right` or `tr`
- `center_left` or `cl`
- `center` or `c`
- `center_right` or `cr`
- `bottom_left` or `bl`
- `bottom_center` or `bc`
- `bottom_right` or `br`

::: details Example {open id="example"}
```json
{
  "alignment": "top_center"
}
```
:::

You can also create a new alignment.

::: details Example {open id="example"}
```json
{
  "alignment": {
    "x": 0.3,
    "y": 0.6666666
  }
}
```
:::
