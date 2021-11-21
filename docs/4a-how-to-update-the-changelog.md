---
title: How to update the changelog
---

import ShareCard from '/src/components/blog/share.js'
import Caption from '/src/components/blog/caption.jsx'
import Comments from '/src/components/blog/comments.js'
import AboutMePostArea from '/src/mdx_components/aboutme_area.mdx'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Call the `Build` method  from the `IChangelogBuilder` interface to update your changelog:

```csharp
var changelogBuilder = serviceProvider.GetRequiredService<IChangelogBuilder>();
changelogBuilder.Build(nextVersion, commitMsgs, changelogPath);
```

<Caption label="Example at cangulo.nuke.releasecreator" linkIsRelative="false"  link="https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.changelog.cs#L33" />

<details>
  <summary>IChangelogBuilder Definition</summary>

```csharp
public interface IChangelogBuilder
{
  void Build(string version, string[] changes, string path);
}
```

<Caption label="Definition at cangulo.changelog" linkIsRelative="false"  link="https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs" />

</details>