"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3014],{8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const l={},o=t.createContext(l);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},8969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"docfiles/cplusplus","title":"C++","description":"SteamCore was primarily made with Blueprints in mind and is not convenient to use in a C++ environment, there is also no benefit to using SteamCore in a C++ environment compared to Blueprints, however it is totally doable.","source":"@site/docs/docfiles/cplusplus.md","sourceDirName":"docfiles","slug":"/docfiles/cplusplus","permalink":"/doc.steamcore/docfiles/cplusplus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"steamCoreSidebar","previous":{"title":"Additional Logging","permalink":"/doc.steamcore/docfiles/additional_logging"},"next":{"title":"Unreal Engine 5","permalink":"/doc.steamcore/docfiles/unreal_engine_5"}}');var l=r(4848),o=r(8453);const a={},i="C++",s={},c=[{value:"Project.Build.cs",id:"projectbuildcs",level:2},{value:"Project.Build.cs Example",id:"projectbuildcs-example",level:2},{value:"PlayerController",id:"playercontroller",level:2},{value:"PlayerController.h",id:"playercontrollerh",level:2},{value:"PlayerController.cpp",id:"playercontrollercpp",level:2},{value:"Example Project",id:"example-project",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"c",children:"C++"})}),"\n",(0,l.jsx)(n.p,{children:"SteamCore was primarily made with Blueprints in mind and is not convenient to use in a C++ environment, there is also no benefit to using SteamCore in a C++ environment compared to Blueprints, however it is totally doable."}),"\n",(0,l.jsx)(n.p,{children:"This example will show you a basic implementation and how to get started but also note that if you decide to use SteamCore in C++ you will be on your own. If you are having issues compiling your C++ project then you will have to solve the issues on your own. One of the reason for this is C++ is extremely compicated and complex and not what the plugin is advertised or even suggested to be used with."}),"\n",(0,l.jsx)(n.p,{children:"With that out of the way, let\u2019s get started!"}),"\n",(0,l.jsx)(n.h2,{id:"projectbuildcs",children:"Project.Build.cs"}),"\n",(0,l.jsxs)(n.p,{children:["Open up your projects ",(0,l.jsx)(n.strong,{children:"\\Source\\Project\\Project.Build.cs"})," file and add ",(0,l.jsx)(n.strong,{children:"SteamCore"})," as a module dependency. Here is an example of what a ",(0,l.jsx)(n.strong,{children:"Build.cs"})," file can look like that incudes the SteamCore module"]}),"\n",(0,l.jsx)(n.h2,{id:"projectbuildcs-example",children:"Project.Build.cs Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'using UnrealBuildTool;\r\n\r\npublic class SteamCPP : ModuleRules\r\n{\r\n   public SteamCPP(ReadOnlyTargetRules Target) : base(Target)\r\n   {\r\n      PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;\r\n   \r\n      PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "SteamCore" });\r\n   }\r\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"playercontroller",children:"PlayerController"}),"\n",(0,l.jsx)(n.p,{children:"We\u2019re going to setup a basic \u201cCreate Lobby Function\u201d in our Player Controller Begin Play function for simplicitys sake, we\u2019ll also need to create the Callack function that will be executed once the lobby execution is done."}),"\n",(0,l.jsx)(n.h2,{id:"playercontrollerh",children:"PlayerController.h"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'#pragma once\r\n\r\n#include "CoreMinimal.h"\r\n#include "GameFramework/PlayerController.h"\r\n#include "SteamMatchmaking/SteamMatchmakingTypes.h"\r\n\r\n#include "BaseController.generated.h"\r\n\r\nUCLASS()\r\nclass ABaseController : public APlayerController\r\n{\r\n   GENERATED_BODY()\r\npublic:\r\n   virtual void BeginPlay() override;\r\npublic:\r\n   UFUNCTION()\r\n   void OnCreateLobbyCallback(const FCreateLobbyData& Data, bool bWasSuccessful);\r\n};\n'})}),"\n",(0,l.jsx)(n.h2,{id:"playercontrollercpp",children:"PlayerController.cpp"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'#include "BaseController.h"\r\n#include "SteamMatchmaking/SteamMatchmaking.h"\r\n\r\nvoid ABaseController::BeginPlay()\r\n{\r\n   Super::BeginPlay();\r\n\r\n   if (UMatchmaking* Matchmaking = GetGameInstance()->GetSubsystem<UMatchmaking>())\r\n   {\r\n      FOnCreateLobby Callback;\r\n      Callback.BindUFunction(this, "OnCreateLobbyCallback");\r\n      Matchmaking->CreateLobby(Callback, ESteamLobbyType::Public, 5);\r\n   }\r\n}\r\n\r\nvoid ABaseController::OnCreateLobbyCallback(const FCreateLobbyData& Data, bool bWasSuccessful)\r\n{\r\n   if (Data.Result == ESteamResult::OK)\r\n   {\r\n      // Success\r\n   }\r\n   else\r\n   {\r\n      // Do stuff\r\n   }\r\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"This will call the \u201cCreate Lobby\u201d function on the Matchmaking subsystem object, once we get a response from Steam the \u201cOnCreateLobbyCallback\u201d will be executed and this is where you can place your custom logic to handle what should happen after we get a response from steam."}),"\n",(0,l.jsx)(n.h2,{id:"example-project",children:"Example Project"}),"\n",(0,l.jsx)(n.p,{children:"You can download this sample project from Github:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/eeldev-ue4/SteamCPP_Example",children:"https://github.com/eeldev-ue4/SteamCPP_Example"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);