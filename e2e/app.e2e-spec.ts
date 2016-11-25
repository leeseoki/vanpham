import { VanphamPage } from './app.po';

describe('vanpham App', function() {
  let page: VanphamPage;

  beforeEach(() => {
    page = new VanphamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
