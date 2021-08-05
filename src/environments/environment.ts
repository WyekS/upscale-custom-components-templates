// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const tenantUrl =
  'https://eap-philos-it-approuter-caas2-sap-stage.cfapps.us10.hana.ondemand.com';

/*
 * For local use, put the necesary identifier from your Upcale tenant
 */
export const environment = {
  production: false,
  mockedIds: {
    language: 'en-US',
    sellingTreeId: '568006af-7ef6-4788-bbbe-508756004428',
  },
  externalMockDataUrl: 'https://www.w3schools.com/angular/customers.php',
  tenantUrl: tenantUrl,
  requestTokenUrl: tenantUrl + '/oauth2/token',
  productsBySellingTree:
    tenantUrl + '/product-content/sellingtrees/${sellingTreeId}/products',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';
// Included with Angular CLI.
