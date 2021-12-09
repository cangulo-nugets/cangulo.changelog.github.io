---
title: Idea
slug: /
date: 2021-11-26
authors: cangulo
---

import { ShareDocusaurus } from '@cangulo-blog/components'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## The problem I want to solve

Let me introduce a few conventions I follow on my GH projects:

* My Dotnet project [cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator) releases a new version every time I merge a PR to the main branch. It is called from specific GH Actions per project.
* My projects follow [Semantic Versioning.](https://semver.org)
* All PR contain [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), they set the release type (_major_, _minor_ or _fix_).

At this point, the problem I have is _cangulo.nuke.releasecreator_ doesn't document the changes introduced on every release. 


### Changes

I consider any commit message as `fix: Solved bug in the TransactionsController` a change introduced. My goal is to have them in:
  1. The GH release notes on every version released, [example](https://github.com/fluentassertions/fluentassertions/releases/tag/6.2.0).
  2. The Changelog, this a Markdown file where all the changes are listed and grouped per version. [example](https://github.com/cangulo-nugets/cangulo.changelog/blob/main/CHANGELOG.md)
     1. File name: `changelog.md` (simple, right?)
     2. Order: recent notes at the top

## Approach

I decided to implement a NuGet package to be consumed by _cangulo.nuke.releasecreator_. Here are the main reasons:

* Although MD is easy to write, it requires some formatting when creating elements (`#` for headers,  `* ` for lists, etc). 
* To code a solution based on shell scripts seems to be an option, but the release notes should be defined in _cangulo.nuke.releasecreator_. This is because the release is created through the GH API there.
* Implementing a solution directly in _cangulo.nuke.releasecreator_ would mix domains. Changes in the changelog format should not affect the release process. 

The nuget package is: [cangulo.changelog](https://www.nuget.org/packages/cangulo.changelog/)

I have the following features in mind:
- Group changes per commit type
- Every change should be listed with a bullet point
- Every Release will be written as an MD Header (`#`)
- Every release should have its date
- Future elements as contributors, PR link, Link to the tests reports executed. Yes, I'm going too far, I will keep this for future versions 😄

## Examples

Let me give an example of the input and output expected.

### Input: Commits from a merged PR
The release 0.0.2 is created after merging a PR with the next commits list:
-   fix: Solved bug in the TransactionsController
-   refactor: Simplified Transactions Repository
-   docs: Updated docs/examples
-   feat: Implemented new DocumentsController
-   refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how -> Please never write a commit message like this 😜, you can find more funny messages [here](http://whatthecommit.com/85835a6ce3edb747ec06e42f6313d0a2).

### Output: Changelog Updated

Next is the changelog section I would like to have for version 0.0.2:

<BrowserWindow>
<Tabs>
  <TabItem value="markdown" label="Markdown Code" default>

```markdown
# 0.0.2

2021-11-20

fix:
-   Solved bug in the TransactionsController

refactor:
-   Simplified Transactions Repository
-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how

docs:
-   Updated docs/examples

features:
-   Implemented new DocumentsController
```

  </TabItem>
  <TabItem value="html" label="Changelog Visualization" default>

# 0.0.2

2021-11-20

fix:
-   Solved bug in the TransactionsController

refactor:
-   Simplified Transactions Repository
-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how

docs:
-   Updated docs/examples

features:
-   Implemented new DocumentsController


  </TabItem>
</Tabs>
</BrowserWindow>
<br/>

Please note the commits are grouped by type: _fix, refactor, docs_

#### Non Conventional Commits

I also would like to accept non conventional commits. The only difference would be commits won't be grouped.

:::info

<details>
  <summary>Output for non conventional commits</summary>

<BrowserWindow>
<Tabs>
  <TabItem value="markdown" label="Markdown Code" default>

```markdown
# 0.0.2

2021-11-20

* fix: Solved bug in the TransactionsController
* refactor: Simplified Transactions Repository
* docs: Updated docs/examples
* feat: Implemented new DocumentsController
* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how
```

  </TabItem>
  <TabItem value="html" label="Changelog Visualization" default>

# 0.0.2

2021-11-20

* fix: Solved bug in the TransactionsController
* refactor: Simplified Transactions Repository
* docs: Updated docs/examples
* feat: Implemented new DocumentsController
* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how


  </TabItem>
</Tabs>
</BrowserWindow>

</details>
  
:::

---

<ShareDocusaurus
  slug="docs" 
  title="cangulo.changelog - Idea and how I use it" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
