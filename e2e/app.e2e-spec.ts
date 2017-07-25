import { PainelPage } from './app.po';

describe('painel App', () => {
  let page: PainelPage;

  beforeEach(() => {
    page = new PainelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
