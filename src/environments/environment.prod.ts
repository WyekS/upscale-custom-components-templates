const tenantUrl =
  'https://eap-philos-it-approuter-caas2-sap-stage.cfapps.us10.hana.ondemand.com';

export const environment = {
  production: true,
  externalMockDataUrl: 'https://www.w3schools.com/angular/customers.php',
  tenantUrl: tenantUrl,
  requestTokenUrl: tenantUrl + '/oauth2/token',
  productsBySellingTree:
    tenantUrl + '/product-content/sellingtrees/${sellingTreeId}/products',
};
