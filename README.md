# Custom Components Upp

The goal of this project is to learn how to customize SAP Upscale with extensions. Services have been prepared to handle event data to user-defined properties, SAP help tips have been included, a distinction has been made for different platforms (Android, iOS...) and several example components have been added to customize SAP Upscale.

Before implement this project is recommended see the next video: [🎞️](https://help.sap.com/viewer/a99d6fa0606f4f3cbf251e4e61f35feb/SHIP/en-US/f542f9dc2d744b28b471ca6f044d832c.html)


Some components are:
- A simple table component that must obtain data from an Upscale event, it is necessary to implement it as follows:
  - Define the same type event that extension subscribed in `component-table.component.ts`:

```ts
initData() {
    window.addEventListener('message', (event: UppEvent<ProductData>) => {
        // Check that the type is as expected
        if (event.type == '<event-type>') {
          this.products.push(event.data);
        }
    }, false);
}
```

  - Build a model class to map the inbound data from event and parametrized `UppEvent<T>`

- A contact form component to input data and manage it like you want

- A component to consume a external URL and show the information like cards

- A component nav that you can use to navigate throught the differents components

Finally, you must configure extension Upscale to consume one of the next URL's:
- `/example-table`
- `/example-form`
- `/example-external-data` 

> Note: Use the navigation component to test application indepently de Upscale, you don't configure it for the extension with the current examples links

## References SAP Upscale

- [SAP Upscale](https://help.sap.com/viewer/product/SAP_UPSCALE_COMMERCE/SHIP/en-US)
- [Custom components](https://help.sap.com/viewer/a99d6fa0606f4f3cbf251e4e61f35feb/SHIP/en-US/f542f9dc2d744b28b471ca6f044d832c.html)

-------

## Installation - Arch Linux

- Install Node.JS
```bash
pacman -S nodejs
```
> Tested with the version `16.1.0`

- Install NPM
```
pacman -S npm
```
> Tested with the version `7.13.0`

- Add path variables to `~/.profile` to allow user-wide installations
```bash
PATH="$HOME/.local/bin:$PATH"
export npm_config_prefix="$HOME/.local"
```

- Restart terminal

- Install Angular CLI 12.0.1 for global scope
```bash
npm install -g @angular/cli
```

- Move to the root repository and install the dependencies `npm install`

- Use the `ng` commands for Angular CLI

[Guide](https://wiki.archlinux.org/title/Node.js)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
