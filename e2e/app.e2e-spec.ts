import { Recipes1Page } from './app.po';

describe('recipes1 App', () => {
  let page: Recipes1Page;

  beforeEach(() => {
    page = new Recipes1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
