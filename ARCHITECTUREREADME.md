Inflexible Requirements
- Zero coupling between child project
- No importing of functions/objects/classes
- No shared state
- Shared libraries through module federation is OK

- Near-zero coupling between container and child apps
- Container shouldn't assume that a child is using a particular framework
- Any necessary communication done with callbacks or simple event

- Css from one project shouldn't affect another

- Version control (monorepo vs separate shouldn't have any impact on the overall project)

- Container should be able to decide to always use the latest version of a microfrontend or specify a specific version