# minimatch-cheat-sheet

A cheat sheet for [minimatch](https://github.com/isaacs/minimatch).

## Basic

- `*` matches any string, not including than path separator
- `**` matches any string, including path separators
- `?` matches single character other than path separator

| Pattern | Matches | Does not match |
| ------- | ------- | -------------- |
| `xxx.*` | `xxx.yyy`, `xxx.y.z` | `abcxxx.yyy`, `xxx.y/z` |
| `xxx/*/yyy` | `xxx/abc/yyy` | `xxx/yyy`, `xxx/abc/def/yyy`, `xxx/.abc/yyy` |
| `xxx/**/yyy` | `xxx/abc/yyy`, `xxx/yyy`, `xxx/abc/def/yyy` | `xxx/.abc/yyy` |
| `xxx/**yyy` | `xxx/yyy` | `xxx/abc/yyy`, `xxx/abc/def/yyy`, `xxx/.abc/yyy` |
| `x?y` | `xAy` | `xy`, `xABy`, `x/y` |

## Braces

- `{foo,bar}` matches "foo" and "bar"
- `{1..3}` matches "1", "2" and "3"

| Pattern | Matches | Does not match |
| ------- | ------- | -------------- |
| `{foo,bar}` | `foo`, `bar` | `baz` |
| `{x,y/*}/z` | `x/z`, `y/a/z` | `y/z` |
| `foo{1..3}` | `foo1`, `foo2`, `foo3` | `foo`, `foo0` |

## Negation

- `!`-prefixed patterns invert match

| Pattern | Matches | Does not match |
| ------- | ------- | -------------- |
| `!abc` | `a`, `xyz` | `abc` |

## Comments

- `#`-prefixed patterns are treated as comments and match nothing
- `\#` to escape

| Pattern | Matches | Does not match |
| ------- | ------- | -------------- |
| `#abc` |  | `abc`, `#abc` |
| `\#abc` | `#abc` | `abc` |

## Extglob

- `+(pattern)` matches one or more repetition of pattern (like `/(pattern)+/`)
- `*(pattern)` matches zero or more repetition of pattern (like `/(pattern)*/`)
- `?(pattern)` matches zero or one repetition of pattern (like `/(pattern)?/`)
- `@(pattern)` matches pattern (like `/(pattern)/`)
- `!(pattern)` matches anything except the pattern (like `/(?!pattern)/`)
- pattern can be joined by `|` (like `/(foo|bar)/`)

| Pattern | Matches | Does not match |
| ------- | ------- | -------------- |
| `a+(xy)` | `axy`, `axyxy` | `a` |
| `a*(xy)` | `a`, `axy`, `axyxy` |  |
| `a@(xy)` | `axy` | `a`, `axyxy` |
| `a!(xy)` | `ax` | `axy`, `axyz` |
| <code>a+(x&#x7C;y*z)</code> | `axx`, `ayzxyzxx`, `axyAAAz` | `axy`, `a` |

