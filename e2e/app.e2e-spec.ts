import { LayourPage } from './app.po';

describe('layour App', () => {
  let page: LayourPage;

  beforeEach(() => {
    page = new LayourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
