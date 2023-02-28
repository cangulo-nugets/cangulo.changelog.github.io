---
title: How to create release notes
authors: cangulo
---

import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Call the `Build` method  from the `IReleaseNotesBuilder` interface to update your changelog:

```csharp
var releaseNotesBuilder = serviceProvider.GetRequiredService<IReleaseNotesBuilder>();
releaseNotesBuilder.Build(commitMsgs)
```

<CaptionDocusaurus label="Example at cangulo.nuke.releasecreator" linkIsRelative={false}  link="https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/12f1a03eb7946e90816ab87205cb798aa6dd9987/src/cangulo.nuke.releasecreator/build.main.cs#L28" />

<details>
  <summary>IReleaseNotesBuilder Definition</summary>

```csharp
public interface IReleaseNotesBuilder
{
    string Build(string[] changes);
}
```

<CaptionDocusaurus label="Definition at cangulo.changelog" linkIsRelative={false}  link="https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ReleaseNotesBuilder.cs" />

</details>

---

<ShareDocusaurus 
  slug="docs/4b-how-to-create-release-notes" 
  title="cangulo.changelog - How to create release notes"
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />