# C++
SteamCore was primarily made with Blueprints in mind and is not convenient to use in a C++ environment, there is also no benefit to using SteamCore in a C++ environment compared to Blueprints, however it is totally doable.

This example will show you a basic implementation and how to get started but also note that if you decide to use SteamCore in C++ you will be on your own. If you are having issues compiling your C++ project then you will have to solve the issues on your own. One of the reason for this is C++ is extremely compicated and complex and not what the plugin is advertised or even suggested to be used with.

With that out of the way, let’s get started!

## Project.Build.cs
Open up your projects **\Source\Project\Project.Build.cs** file and add **SteamCore** as a module dependency. Here is an example of what a **Build.cs** file can look like that incudes the SteamCore module

## Project.Build.cs Example
```c
using UnrealBuildTool;

public class SteamCPP : ModuleRules
{
   public SteamCPP(ReadOnlyTargetRules Target) : base(Target)
   {
      PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
   
      PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "SteamCore" });
   }
}
```

## PlayerController
We’re going to setup a basic “Create Lobby Function” in our Player Controller Begin Play function for simplicitys sake, we’ll also need to create the Callack function that will be executed once the lobby execution is done.


## PlayerController.h
```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "SteamMatchmaking/SteamMatchmakingTypes.h"

#include "BaseController.generated.h"

UCLASS()
class ABaseController : public APlayerController
{
   GENERATED_BODY()
public:
   virtual void BeginPlay() override;
public:
   UFUNCTION()
   void OnCreateLobbyCallback(const FCreateLobbyData& Data, bool bWasSuccessful);
};
```

## PlayerController.cpp

```cpp
#include "BaseController.h"
#include "SteamMatchmaking/SteamMatchmaking.h"

void ABaseController::BeginPlay()
{
   Super::BeginPlay();

   if (UMatchmaking* Matchmaking = GetGameInstance()->GetSubsystem<UMatchmaking>())
   {
      FOnCreateLobby Callback;
      Callback.BindUFunction(this, "OnCreateLobbyCallback");
      Matchmaking->CreateLobby(Callback, ESteamLobbyType::Public, 5);
   }
}

void ABaseController::OnCreateLobbyCallback(const FCreateLobbyData& Data, bool bWasSuccessful)
{
   if (Data.Result == ESteamResult::OK)
   {
      // Success
   }
   else
   {
      // Do stuff
   }
}
```

This will call the “Create Lobby” function on the Matchmaking subsystem object, once we get a response from Steam the “OnCreateLobbyCallback” will be executed and this is where you can place your custom logic to handle what should happen after we get a response from steam.

## Example Project
You can download this sample project from Github:

https://github.com/eeldev-ue4/SteamCPP_Example
