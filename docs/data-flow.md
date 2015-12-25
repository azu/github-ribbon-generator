# Data Flow

like Flux

## Flow

AppComponent - Root component is [app.vue](../src/component/app.vue).

- AppComponent listen "Change" of UserStore.
- AppComponent update state that fetch from store <- UserStore#getState();
- AppComponent Distribute own's state as props -> Props-> SubComponent
- Each Component -> UserStore#set* -> emit "Change"

Store -> `state` -> AppComponent -> `state` -> Sub Component -> `action` -> Store