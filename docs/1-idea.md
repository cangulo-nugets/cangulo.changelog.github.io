---
title: Idea
slug: /
date: 2021-11-26
authors: cangulo
---

import ShareCard from '/src/components/blog/share.js'
import Caption from '/src/components/blog/caption.jsx'
import Comments from '/src/components/blog/comments.js'
import AboutMePostArea from '/src/mdx_components/aboutme_area.mdx'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## The problem I want to solve

In my GitHub repos I am using the dotnet project [cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator) for releasing a new version every time I merge a PR to the main branch. For that, I have to follow the next conventions:

* The App follows [Semantic Versioning.](https://semver.org)
* All PR contain [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) which set the release to be created (_major_, _minor_ or _fix_).

At this point, I have a release process but I'm not documenting the changes. There are two places where I should post them:
1. The release notes
2. The changelog

As cangulo.nuke.releasecreator is already using the commit messages for calculating the next version, I created ___cangulo.changelog___ solution to list them in the two places mentioned before.

:::info
For the rest of the article I'm going to focus only in updating the changelog. I will talk about creating the release notes using cangulo.changelog in the [next post](./2-cangulo.changelog-release-notes).
:::

Maybe you would say, okay, why do you need a custom solution? Why don't you do it in the GH Action itself or in the _cangulo.nuke.releasecreator_ project? Well, when I started working on this I realize it was not so simple, here is what I took into account:

-   The Changelog is a Markdown (MD) file, so adding the changes is not directly appending text, we should format.
-   To make the Changelog more formal we should add other elements as:
	-   Header containing the version number
	-   A Date to know when that release was created (okay, this is a _nice to have_ 😁)
	-   Future elements as contributors, PR link, Link to the tests reports executed. Yes, I'm going too far, I will keep this for future versions 😄

Although MD is easy to write, it requires to format the text when creating elements (`#` for headers `* ` for list item, etc). So, to avoid doing that logic in shell scripts or mixing domains (release process and changelog update), I decided to implement this in a separate repository, the [cangulo.changelog repository](https://github.com/cangulo-nugets/cangulo.changelog). Let me give an example of the input and output expected.

### Input: Commits from a merged PR
The release 0.0.2 is created after merging a PR with the next commits list:
-   fix: Solved bug in the TransactionsController that makes transactions fail
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
-   Solved bug in the TransactionsController that makes transactions fail

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
-   Solved bug in the TransactionsController that makes transactions fail

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

* fix: Solved bug in the TransactionsController that makes transactions fail
* refactor: Simplified Transactions Repository
* docs: Updated docs/examples
* feat: Implemented new DocumentsController
* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how
```

  </TabItem>
  <TabItem value="html" label="Changelog Visualization" default>

# 0.0.2

2021-11-20

* fix: Solved bug in the TransactionsController that makes transactions fail
* refactor: Simplified Transactions Repository
* docs: Updated docs/examples
* feat: Implemented new DocumentsController
* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how


  </TabItem>
</Tabs>
</BrowserWindow>

</details>
  
:::


## Final notes

In order to avoid making this post longer, I keep the implementation details for the next article. So far I have explained the why I created this project and how I use it.


<AboutMePostArea/>

<ShareCard 
  slug="projects/1-cangulo.changelog-idea-and-how-to-use" 
  title="cangulo.changelog - Idea and how I use it" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
  
<Comments
  slug="projects/1-cangulo.changelog-idea-and-how-to-use"  />