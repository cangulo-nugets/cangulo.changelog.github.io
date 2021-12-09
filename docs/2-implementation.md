---
title: Implementation
---

import ShareCard from '/src/components/blog/share.js'
import Caption from '/src/components/blog/caption.js'
import AboutMePostArea from '/src/mdx_components/aboutme_area.mdx'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

First of all, let me refresh the main goals we have: 
* Update the changelog 
* Create the release notes. 

Perfect, next are the interfaces for those goals.
* IReleaseNotesBuilder
* IChangelogBuilder

In order to have reusable classes between both processes. I implemented the following classes for the MD operations:

* IChangelogVersionNotesBuilder: 
  * Class that builds a Changelog Section with the changes provided.
  * Called by the IChangelogBuilder. 
  * Use all the MD classes to build the Changelog.
* IChangesListAreaBuilder: 
  * Receives a list of changes (commit messages) and creates a list in MD format. 
  * Called by IChangelogVersionNotesBuilder and IReleaseNotesBuilder.

As I want to be able to support both commits types (Conventional and Non Conventional) I have two implementations for the IChangesListAreaBuilder:

* ChangesAreaBuilderForConventionalCommits
  * It group the commits received by type.
* ChangesAreaBuilderForNonConventionalCommits
  * It simply list the commits received

<!-- TODO: Add two tabs with the different output -->
<!-- TODO: Add two tabs with the different output -->


<ShareCard 
  slug="docs/implementation" 
  title="cangulo.changelog - Idea and how I use it" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
