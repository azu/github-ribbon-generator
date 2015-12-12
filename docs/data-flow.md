# Data Flow

like Flux

## Flow

- Component listen "Change" of UserStore.
- Component <- UserStore#getState();
- Component ->Props-> SubComponent
- Each Component -> UserStore#set* -> emit "Change"


Store -> Component -> Sub Component -> Store