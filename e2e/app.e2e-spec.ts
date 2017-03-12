import { Monsters5ePage } from './app.po';

describe('monsters5e App', () => {
  let page: Monsters5ePage;

  beforeEach(() => {
    page = new Monsters5ePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
