---
title: Showcases
authors: cangulo
---

import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Next are some changelogs I build using this solution.

1.  [cangulo.common.testing Changelog](https://github.com/cangulo-nugets/cangulo.common.testing/blob/main/CHANGELOG.md)
2.  [cangulo.nuke.prcommitsvalidations Changelog](https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations/blob/main/CHANGELOG.md)
3.  [cangulo.nuke.releasecreator Changelog](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/main/CHANGELOG.md)

In the release process of those repositories, [cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator) use [cangulo.changelog](https://www.nuget.org/packages/cangulo.changelog/) to update the changelog and create the release notes.

---

<ShareDocusaurus
  slug="docs/show-cases" 
  title="cangulo.changelog - Showcases" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
