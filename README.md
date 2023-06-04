# Vue frontend

Frontend build with [vue](https://vuejs.org/) through [vite](https://vitejs.dev/)

# Requirements

- [`Node`](https://nodejs.org/en/), [`pnpm`](https://pnpm.io/)

# Structure

- `*`: config files, can be mostly ignored
- `src/pages`: vue pages
- `src/layouts`: vue page layouts
- `src/components`: vue components
- `src/scripts`
  - `config`: environment variables / settings
  - `services`: globally used complex functionality
  - `stores`: pinia stores
  - `types`: typescript definitions / utility
  - `util`: leftover utility functions

Main files can be found under `/src/main.ts` and `/src/App.vue`

# Usage

## Setup

install packages:

```
pnpm install / pnpm i
```

run:

```
pnpm dev
```

>when changing graphql requests run to update types:
>```
>pnpm watch
>```
>or to update graphql requests types onces:
>```
>pnpm compile
>```

## Setup Docker
Baue das Docker-Image
Öffne eine Kommandozeile oder ein Terminal und navigiere zum Verzeichnis, das das Dockerfile enthält. Führe den folgenden Befehl aus, um das Docker-Image zu erstellen:

```
docker build -t "image-name" .
```

Hierbei ist image-name der Name, den du deinem Docker-Image geben möchtest. Der Punkt am Ende des Befehls gibt an, dass das Dockerfile im aktuellen Verzeichnis gefunden werden soll.

Starte den Docker-Container
Führe den folgenden Befehl aus, um einen Docker-Container auf Basis des Images zu starten, das du gerade erstellt hast:

```
docker run -p "host-port":"container-port" "image-name"
```

Hierbei ist "host-port" der Port auf deinem Host-System, auf den der Container-Port "container-port" gemappt werden soll. "image-name" ist der Name des Docker-Images, das du erstellt hast.

Wenn alles funktioniert hat, solltest du nun in der Lage sein, das Expertenverzeichniss im Browser oder über eine andere Methode aufzurufen, indem du http://localhost:"host-port" in deinem Webbrowser aufrufst.
## Vue

[Docs](https://vuejs.org/guide/introduction.html) contain all generally needed informations.
[Examples](https://vuejs.org/examples/#hello-world) contain usecases that can easily be copied and adapted.
> always check that your viewing docs and examples for the `Composition`-Api

## Calls to backend

To interact with the backend (get, change, delete, ... data/actions) use apollo (graphql client) which is available through [vue-apollo](https://v4.apollo.vuejs.org/guide-composable/) and view existing requests to have type safety (`grapqh(` for type generation and `#graphql` for autocomplete in editor while writing request).
> Example:
>```ts
>export const NEW_EXPERT =
>    graphql(`#graphql
>    mutation NewExpert($input : AddExpertInput!){
>        addExpert(input: $input) {
>            expert {
>                id
>                name
>                email
>            }
>        }
>    }`)
>```
[docs](https://v4.apollo.vuejs.org/guide-composable/) contain examples for data fetching use cases.


## Styling

Changing layout and style of elements can be done through css in [vue bindings](https://vuejs.org/guide/essentials/class-and-style.html#binding-inline-styles) or in file `<style>` section, but preferably through [tailwind css](https://tailwindcss.com/)

## IDE integration

## Visual Studio Code

for autocomplete and formatted graphql queries + schema fetch from backend
- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Webstorm

- [JS GraphQL extension](https://plugins.jetbrains.com/plugin/8097-graphql/)
