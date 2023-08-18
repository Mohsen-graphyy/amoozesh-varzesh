import HttpFactory from '~/services/factory';
// import your data types - I put any to test

class General extends HttpFactory {
  private RESOURCE = '/api';

  async getBooks(): Promise<any> {
    return await this.call('GET', `${this.RESOURCE}/search`, undefined ,
    { headers: { 
      'X-RapidAPI-Key': '0d3ea2b5f0msh70365499fb5cbf1p17cbfejsn22829a169365',
      'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com' 
      } 
    }) 
  }
}

export default General;