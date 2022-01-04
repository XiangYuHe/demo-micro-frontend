Requirements
- Both the container + individual subapps need routing features

- Users can navigate around to different apps using routing logic built into the container
- Users can navigate around in a subapp using routing logic built into the subapp it self
- Not all subapps will require routing

Sub-app might need to add route
- New routes added to a subapp shouldn't require a redeploy of the container

We might need to show two or more microfrontends at the same time
- If we have a sidebar navigation as an example

Navigation features for subapp
- In both isolation or as part of the container

If need to communicate information about routing - should be done in generica fashion as possible
- As each app might be using completely different navigation framework
- Swap out or upgrae navigation libraries all the time - shouldn't require a rewrite of the rest of the app