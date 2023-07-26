import HttpFactory from '~/services/factory';
// import your data types - I put any to test

class General extends HttpFactory {
  private RESOURCE = '/api/v2/';

  async getCourses(): Promise<any> {
    return await this.call('GET', `${this.RESOURCE}/users`);
  }
}

export default General;