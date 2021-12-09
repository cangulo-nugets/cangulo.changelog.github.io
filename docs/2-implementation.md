---
title: Implementation
authors: cangulo
---

import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

First of all, let me refresh the main goals we have: 
* Update the Changelog 
* Create the release notes. 

I have defined an interface for each goal:
* `IReleaseNotesBuilder`
  * Create the release notes using the `IChangesListAreaBuilder` interface.
* `IChangelogBuilder`
  * If there is a changelog, it adds the changes provided at first.
  * If there is not, it is created.


:::info Interactive Diagram 😁
All diagrams have links to the classes and interfaces code, just click on them!
::: 

```mermaid

 classDiagram
      IChangelogBuilder <|-- ChangelogBuilder
      IReleaseNotesBuilder <|-- ReleaseNotesBuilder

      class IChangelogBuilder {
        <<interface>>
        +Build(string version, string[] changes, string path) void
      }
      
      class ChangelogBuilder{
        -readonly IChangelogVersionNotesBuilder _changelogVersionNotesBuilder
        +Build(string version, string[] changes, string path) void
        -GetCurrentContent(string path) string
        -AppendContent(string path, string content) void
        -OverwriteContent(string path, string content) void
      }

      class IReleaseNotesBuilder {
        <<interface>>
        +Build(string[] changes) string 
      }


      class ReleaseNotesBuilder {
        -readonly IChangesListAreaBuilder _changesListAreaBuilder
        +Build(string[] changes) string 
      }

      %% Links
      click IChangelogBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogBuilder.cs"
      click ChangelogBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogBuilder.cs"
      click IReleaseNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ReleaseNotesBuilder.cs"
      click ReleaseNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ReleaseNotesBuilder.cs"

```
<i>
  <CaptionDocusaurus label="Main interfaces" />
</i>

Then, in order to have reusable classes between both processes. I implemented the following classes:

* `IChangelogVersionNotesBuilder`: 
  * Class that builds a Changelog Section with the changes provided.
    * Add two placeholder to divide sections: `START-VERSION:` and `END-VERSION:`
    * Add the version number as a Header
    * Add the current date
    * Append the changes formatted by `IChangesListAreaBuilder`
  * Called by the `IChangelogBuilder`. 

```mermaid

 classDiagram
      IChangelogVersionNotesBuilder <|-- ChangelogVersionNotesBuilder

      class IChangelogVersionNotesBuilder {
        <<interface>>
        +Build(string version, string[] changes) string
      }
      
      class ChangelogVersionNotesBuilder{
        -readonly IChangesListAreaBuilder _changesListAreaBuilder
        +Build(string version, string[] changes) string 
      }


      %% Links
      click IChangelogVersionNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogVersionNotesBuilder.cs"
      click ChangelogVersionNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogVersionNotesBuilder.cs"

```

* `IChangesListAreaBuilder`: 
  * Receives a list of changes (commit messages) and creates a list in MD format. 
  * Called directly by `IReleaseNotesBuilder`. Also used by `IChangelogVersionNotesBuilder`.

As I want to be able to support both commits types (Conventional and Non-Conventional), I have two implementations for the IChangesListAreaBuilder:

* `ChangesAreaBuilderForConventionalCommits`
  * It groups the commits received by type.
* `ChangesAreaBuilderForNonConventionalCommits`
  * It simply lists the commits received
```mermaid

 classDiagram
      IChangesListAreaBuilder <|-- ChangesAreaBuilderForConventionalCommits
      IChangesListAreaBuilder <|-- ChangesAreaBuilderForNonConventionalCommits

      class IChangesListAreaBuilder {
        <<interface>>
        +Build(string[] changes) string
      }


      class ChangesAreaBuilderForConventionalCommits {
        -readonly ICoventionalCommitParser _conventionalCommitParser
        -ChangelogSettings _changelogSettings
        +Build(string[] changes) string
      }

      class ChangesAreaBuilderForNonConventionalCommits {
        +Build(string[] changes) string
      }

      %% Links
      click IChangesListAreaBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/IChangesListAreaBuilder.cs"
      click ChangesAreaBuilderForConventionalCommits href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ConventionalCommits/ChangesAreaBuilderForConventionalCommits.cs"
      click ChangesAreaBuilderForNonConventionalCommits href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/NonConventionalCommits/ChangesAreaBuilderForNonConventionalCommits.cs"

```

It is worth mentioning that I have created the static class `MarkdownBuilder` for formatting text into MD:

```mermaid

 classDiagram
      class MarkdownBuilder {
        <<static>>
        +Comment(string content)$ string 
        +Title(string title, TitleLevel titleLevel)$ string 
        +ListItem(string item, ListItemLevel listItemLevel)$ string 
      }

      %% Links
      click MarkdownBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/markdown/MarkdownBuilder.cs"

```

<!-- TODO: Add two tabs with the different output -->
<!-- TODO: Add two tabs with the different output -->

---

<ShareDocusaurus 
  slug="docs/implementation" 
  title="cangulo.changelog - Idea and how I use it" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
