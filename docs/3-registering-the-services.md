---
title: Registering the services
---

import ShareCard from '/src/components/blog/share.js'
import Caption from '/src/components/blog/caption.js'
import AboutMePostArea from '/src/mdx_components/aboutme_area.mdx'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

The services required should be setup in your `startup.cs` by calling the `AddChangelogServices` method:
```csharp {8}
using cangulo.changelog.Extensions;
//...
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
		  //...
	    services.AddChangelogServices(settings);
	    //...
    }
}
```
<Caption label="Example at cangulo.nuke.releasecreator" linkIsRelative={false}  link="https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.startup.cs#L27" />

The object passed is a `ChangelogSettings` instance. It sets the working mode (Conventional or Non-Conventional Commits) in the `CommitsMode` attribute. In case you want to go with the conventional ones, you have to provide the types in the `ConventionalCommitsSettings`. 
```csharp
public class ChangelogSettings
{
  public CommitsMode CommitsMode { get; set; }
  public ConventionalCommitsSettings ConventionalCommitsSettings { get; set; }
}

public class ConventionalCommitsSettings
{
  public string[] Types { get; set; }
}
public enum CommitsMode
{
  NonConventionalCommits, // Yes, I also allow non conventional commits
  ConventionalCommits
}
```
<Caption label="Definition at cangulo.changelog" linkIsRelative={false}  link="https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Models/ChangelogSettings.cs" />

:::info Idea!

<details>
  <summary>Define those settings in a json file, maybe your appsettings, and parse them. Click Here to check an example</summary>

```json
{
    "commitsMode": "conventionalCommits",
    "conventionalCommitsSettings": {
        "types": [
            "fix",
            "patch",
            "refactor",
            "feat",
            "major",
            "break",
            "docs"
        ]
    }
}
```
<Caption label="Example at cangulo.nuke.releasecreator" linkIsRelative={false}  link="https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/cicd/releaseSettings.json#L38" />

</details>
  
:::

<ShareCard 
  slug="docs/registering-the-services"
  title="cangulo.changelog - Registering the services" 
  tags={["nuke", "cicd", "cangulo.changelog","conventional_commits", "changelog"]} />
