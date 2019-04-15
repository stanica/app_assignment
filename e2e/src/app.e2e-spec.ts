import { AppPage } from './app.po';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display popular movies title', () => {
    page.navigateToPopular();
    expect(page.getPopularPageTitle()).toEqual('Popular Movies');
  });

  it('should display top movies title', () => {
    page.navigateToTop();
    expect(page.getPopularPageTitle()).toEqual('Top Movies');
  });

  it('should navigate to details page', () => {
    const image = page.getFirstImage();
    page.clickImage(image).then(result => {
      expect(page.getDetailsPageTitle()).toEqual('MovieDetail');
    });
  });
});
