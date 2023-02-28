---
title: How to update the changelog
authors: cangulo
---

import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Call the `Build` method  from the `IChangelogBuilder` interface to update your changelog:

```csharp
var changelogBuilder = serviceProvider.GetRequiredService<IChangelogBuilder>();
changelogBuilder.Build(nextVersion, commitMsgs, changelogPath);
```

<CaptionDocusaurus label="Example at cangulo.nuke.releasecreator" linkIsRelative={false}  link="https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.changelog.cs#L33" />

<details>
  <summary>IChangelogBuilder Definition</summary>

```csharp
public interface IChangelogBuilder
{
  void Build(string version, string[] changes, string path);
}
```

<CaptionDocusaurus label="Definition at cangulo.changelog" linkIsRelative={false}  link="https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs" />

</details>

---

<ShareDocusaurus
  slug="docs/4a-how-to-update-the-changelog" 
  title="cangulo.changelog - How to update the changelog" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
