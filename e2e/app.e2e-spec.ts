import { AngularChatPage } from './app.po';

describe('angular-chat App', () => {
  let page: AngularChatPage;

  beforeEach(() => {
    page = new AngularChatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
