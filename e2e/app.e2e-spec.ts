import { ProductsAppPage } from './app.po';

describe('products-app App', function() {
  let page: ProductsAppPage;

  beforeEach(() => {
    page = new ProductsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
