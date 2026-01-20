# Vitest Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

<br>

### Vitest Test Structure

| Snippet      | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `iv`         | essential imports for vitest                       |
| `ive`        | extra imports for vitest                           |
| `d`, `desc`  | creates a describe block                           |
| `do`         | creates a describe block that runs only            |
| `ds`         | creates a describe block that will be skipped      |
| `i`, `it`    | creates an it block                                |
| `io`         | creates an it block that runs only                 |
| `is`         | creates an it block that will be skipped           |
| `itd`        | creates a test placeholder                         |
| `ia`         | creates an it block with async callback function   |
| `t`          | creates a test block                               |
| `to`         | creates a test block that runs only                |
| `ts`         | creates a test block that will be skipped          |
| `ttd`        | creates a test placeholder                         |
| `ta`         | creates an test block with async callback function |

### Vitest Lifecycle Hooks

| Snippet  | Purpose                                              |
| -------- | ---------------------------------------------------- |
| `aa`     | afterAll function is called once after all specs     |
| `ae`     | afterEach function is called once after each spec    |
| `be`     | beforeEach function is called once before each spec  |
| `bea`    | beforeEach with async callback function              |
| `ba`     | beforeAll function is called once before all specs   |
| `baa`    | beforeAll with async function                        |
| `aevcr`  | afterEach mock clear and reset functions             |

### Vitest Assertions - Matchers

| Snippet    | Purpose                                              |
| ---------- | ---------------------------------------------------- |
| `e`        | expect actual value                                  |
| `ea`       | expects the test to make the indicated number        |
| `eha`      | expects the test to make at least one assertion      |
| `erj`      | expect promise rejects to                            |
| `ers`      | expect promise resolves to                           |
| `tb`       | expects the first argument to be equal               |
| `tbct`     | expects the first argument to be close to            |
| `tbd`      | expects the argument is defined                      |
| `tbf`      | expects the argument is falsy                        |
| `tbgt`     | expects the argument is greater than                 |
| `tbgte`    | expects the argument is greater than or equal        |
| `tbid`     | expects the argument to be in the document           |
| `tbi`      | expects the argument is instance of                  |
| `tblt`     | expects the argument is less than                    |
| `tblte`    | expects the argument is less than or equal           |
| `tbn`      | expects the argument is null                         |
| `tbt`      | expects the argument is truthy                       |
| `tbu`      | expects the argument is undefined                    |
| `tc`       | expects the list contains the item (===)             |
| `tce`      | expects the list contains the item (equals)          |
| `te`       | expects the first argument to be equal               |
| `thbc`     | returns true if the spy was called                   |
| `thbct`    | returns true if the spy has been called given times  |
| `thbcw`    | returns true if the spy has been called with         |
| `thblcw`   | returns true if the spy has been last called with    |
| `thl`      | expects the object to have length                    |
| `thp`      | returns true if the argument matches the property    |
| `thpd`     | returns true if the property disabled                |
| `thps`     | returns true if the property selected                |
| `tm`       | returns true if the argument matches                 |
| `tmis`     | matches the most recent inline snapshot              |
| `tmo`      | returns true if the argument matches the object      |
| `tms`      | matches the most recent snapshot                     |
| `tse`      | expects the first argument to be strictly equal      |
| `tt`       | expects that the method will throw an error          |
| `tte`      | expects that the method will throw an error          |
| `ttemis`   | throw error matching the inline snapshot             |
| `ttems`    | throw error matching the snapshot                    |

### Vitest Expect Any

| Snippet  | Purpose                |
| -------- | ---------------------- |
| `eav`    | expect any value type  |
| `eas`    | expect any string type |
| `ean`    | expect any number type |
| `eab`    | expect any boolean type|
| `ead`    | expect any date type   |
| `eaf`    | expect any function type|
| `eaa`    | expect any array type  |
| `eat`    | expect anything        |

### Vitest Mocks & Spies

| Snippet  | Purpose                                          |
| -------- | ------------------------------------------------ |
| `vm`     | creates vi.mock()                                |
| `vmrv`   | creates vi.mock() with resolved value            |
| `vf`     | creates vi.fn()                                  |
| `vfrv`   | creates vi.fn() with resolved value              |
| `cf`     | creates a mock variable for a vi.fn()            |
| `cfrv`   | creates a mock variable with resolved value      |
| `mrv`    | assign a return value                            |
| `mrvo`   | assign a return value for only one call          |
| `vs`     | creates vi.spyOn()                               |
| `vsi`    | creates vi.spyOn() with mock implementation      |
| `cs`     | creates a spy variable for a vi.spyOn()          |
| `csi`    | creates a spy variable with mock implementation  |
